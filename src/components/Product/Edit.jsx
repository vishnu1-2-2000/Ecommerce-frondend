import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Edit() {
  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state?.sidebar?.sideBar);
  const { id } = useParams(); // Get product ID from URL
  const API_URL = `${window.url}products/${id}`; // API endpoint

  // State variables for product data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = Cookies.get("access");
    if (!token) {
      navigate("/"); // Redirect if no auth token
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${window.url}products/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          const productData = response.data;
          setName(productData.name || "");
          setDescription(productData.description || "");
          setPrice(productData.price || "");
          setStock(productData.stock || "");
          setPreviewImage(productData.image || ""); // Load existing image
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (err) {
        console.error("Error fetching product data:", err);
        if (err.response?.data?.message === "Token expired, please login again") {
          Cookies.remove("access");
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [navigate, id]);

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Product Name is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!price || isNaN(price) || price <= 0) newErrors.price = "Enter a valid price";
    if (!stock || isNaN(stock) || stock < 0) newErrors.stock = "Stock must be a non-negative number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = Cookies.get("access");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", parseFloat(price));
    formData.append("stock", stock);
    if (image) formData.append("image", image); // Only append image if changed

    try {
      await axios.put(`${window.url}products/${id}/`, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
      });

      Swal.fire({
        icon: "success",
        title: "Product Updated!",
        text: `Product has been updated successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/Lists"); // Redirect after update
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error.response ? JSON.stringify(error.response.data) : error.message}`,
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className={`wrapper ${sideBarState ? "sidebar_minimize" : ""}`}>
      <SideBar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="card">
              <div className="card-header text-white">
                <center>
                  <h5 style={{ color: "black" }}>Edit Product</h5>
                </center>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="name">Product Name</label>
                      <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                      {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input type="text" className="form-control" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                      {errors.description && <span className="text-danger">{errors.description}</span>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input type="text" className="form-control" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                      {errors.price && <span className="text-danger">{errors.price}</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="stock">Stock</label>
                      <input type="text" className="form-control" name="stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                      {errors.stock && <span className="text-danger">{errors.stock}</span>}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="image">Product Image</label>
                      <input type="file" className="form-control" name="image" onChange={handleImageChange} />
                      {previewImage && <img src={previewImage} alt="Preview" className="img-thumbnail mt-2" style={{ width: "100px", height: "100px" }} />}
                    </div>
                  </div>
                </div>

                <br />
                <center>
                  <div className="card-action">
                    <button className="btn" style={{ backgroundColor: "#2E1A47", color: "white" }} onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Edit;
