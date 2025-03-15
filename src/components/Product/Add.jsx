import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Add() {
  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state?.sidebar?.sideBar);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null, // Added image field
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product Name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.price.trim()) newErrors.price = "Price is required";
    if (!formData.stock.trim()) newErrors.stock = "Stock is required";
    if (!formData.image) newErrors.image = "Product image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const token = Cookies.get("access");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input (image)
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = Cookies.get("access");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", parseInt(formData.price)); // Convert to integer
    formDataToSend.append("stock", parseInt(formData.stock)); // Convert to integer
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post(
        window.url + "products/",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for file upload
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Product Created!",
        text: "Product has been added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/Lists");

    } catch (error) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error.response ? JSON.stringify(error.response.data) : error.message}`,
        showConfirmButton: true,
      });
    }
  };

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
                  <h5 style={{ color: "black" }}>Create Product</h5>
                </center>
              </div>
              <div className="card-body">
                <div className="row">
                  {/* Product Name */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="name">Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                      />
                      {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                  </div>

                  {/* Stock */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="stock">Stock</label>
                      <input
                        type="number"
                        className="form-control"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Enter Stock"
                      />
                      {errors.stock && <span className="text-danger">{errors.stock}</span>}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter Price"
                      />
                      {errors.price && <span className="text-danger">{errors.price}</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Description */}
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter Description"
                        rows="4"
                      ></textarea>
                      {errors.description && <span className="text-danger">{errors.description}</span>}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="image">Product Image</label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      {errors.image && <span className="text-danger">{errors.image}</span>}
                    </div>
                  </div>
                </div>

                <br />
                <center>
                  <div className="card-action">
                    <button
                      className="btn"
                      style={{ backgroundColor: "#2E1A47", color: "white" }}
                      onClick={handleSubmit}
                    >
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

export default Add;
