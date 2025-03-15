import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import "./View.css"; // Import CSS for styling

function View() {
  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state?.sidebar?.sideBar);
  const { id } = useParams();
  
  // Ensure window.url is defined
  const API_URL = window.url ? `${window.url}products/${id}/` : null;

  // State variables
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = Cookies.get("access");

    if (!token) {
      navigate("/");
      return;
    }

    if (!API_URL) {
      setError("API URL is not defined.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data) {
          setProduct(response.data);
        } else {
          throw new Error("Invalid API response structure");
        }
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError(err.response?.data?.message || "Failed to fetch product details.");
        
        if (err.response?.status === 401) {
          Swal.fire("Session Expired", "Please log in again.", "warning");
          Cookies.remove("access");
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [navigate, id, API_URL]);

  return (
    <div className={`wrapper ${sideBarState ? "sidebar_minimize" : ""}`}>
      <SideBar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="product-card">
              <h2 className="card-title">Product Details</h2>

              {loading && <p className="loading-text">Loading product details...</p>}

              {error && <p className="error">{error}</p>}

              {product && !loading && !error && (
                <>
                  <div className="product-detail">
                    <span className="label">Product Name:</span>
                    <span className="value">{product.name}</span>
                  </div>

                  <div className="product-detail">
                    <span className="label">Description:</span>
                    <span className="value">{product.description}</span>
                  </div>

                  <div className="product-detail">
                    <span className="label">Price:</span>
                    <span className="value">${product.price}</span>
                  </div>

                  <div className="product-detail">
                    <span className="label">Stock:</span>
                    <span className="value">{product.stock}</span>
                  </div>
                   {/* Display Image */}
          {product.image_url ? (
            <img src={product.image_url} alt={product.name} className="product-image" />
          ) : (
            <p>No Image Available</p>
          )}
                </>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default View;
