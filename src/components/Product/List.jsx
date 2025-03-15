import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { IoEye } from "react-icons/io5";
import Swal from "sweetalert2";

function List() {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowsPerPage] = useState(5);

  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state?.sidebar?.sideBar);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const API_URL = window.url + "products/";

  useEffect(() => {
    const token = Cookies.get("access");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.data || !Array.isArray(response.data)) {
          throw new Error("Invalid API response structure");
        }

        const formattedData = response.data.map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          price: parseFloat(item.price),
          stock: item.stock,
          image: item.image, // Ensure backend returns image URLs
        }));

        setRows(formattedData);
        setFilteredRows(formattedData);
        setTotalRecords(formattedData.length);
      } catch (err) {
        setError(`Failed to fetch product data: ${err.response?.data?.message || err.message}`);
        if (err.response?.data?.message === "Token expired, please login again") {
          Cookies.remove("authToken");
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handlePreview = (imageUrl) => {
    Swal.fire({
      imageUrl: imageUrl,
      imageAlt: "Product Image",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
 // Handle Search Filter
 const handleSearch = () => {
  let filteredData = rows;

  if (name) {
    filteredData = filteredData.filter(row => row.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (price) {
    filteredData = filteredData.filter(row => row.price <= parseFloat(price));
  }

  if (stock) {
    filteredData = filteredData.filter(row => row.stock >= parseInt(stock));
  }

  setFilteredRows(filteredData);  // Set all matched rows
  setTotalRecords(filteredData.length); // Update total records count
  setCurrentPage(1); // Reset to first page after search
};
// Pagination Logic
const totalPages = Math.ceil(totalRecords / rowsPerPage);
const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;
const displayedRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);


  const handleEdit = (productId) => {
    navigate(`/product_edit/${productId}`);
  };
  const handleView = (productId) => {
    navigate(`/product_view/${productId}`);
  };

  const handleDelete = async (id) => {
    const token = Cookies.get("access");
    if (!token) {
      navigate("/");
      return;
    }

    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`${API_URL}${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRows(rows.filter((row) => row.id !== id));
        setFilteredRows(filteredRows.filter((row) => row.id !== id));
        setTotalRecords(filteredRows.length - 1);

        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } catch (err) {
        setError(`Failed to delete product: ${err.response?.data?.message || err.message}`);
      }
    }
  };
 
  return (
    <div className={`wrapper ${sideBarState ? "sidebar_minimize" : ""}`}>
  <SideBar pageName="userrolePermissions" />
  <div className="main-panel">
    <Header />
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Product List</h3>
        </div>

        {/* Search Filters */}
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row g-3 align-items-end">
                  <div className="col-md-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Search by Name"
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Search by Price"
                    />
                  </div>
                  <div className="col-md-3">
                    <label>Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      placeholder="Search by Stock"
                    />
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-primary" onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p style={{ color: "red" }}>{error}</p>
                ) : (
                  <>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredRows
                            .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                            .map((row) => (
                              <tr key={row.id}>
                                <td>
                                  <IoEye onClick={() => handleView(row.id)} />
                                </td>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.description}</td>
                                <td>{row.price}</td>
                                <td>{row.stock}</td>
                                <td>
                                  {row.image ? (
                                    <img
                                      src={row.image}
                                      alt="Product"
                                      width="50"
                                      height="50"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => handlePreview(row.image)}
                                    />
                                  ) : (
                                    "No Image"
                                  )}
                                </td>
                                <td>
                                  <FaEdit
                                    size={13}
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => handleEdit(row.id)}
                                  />
                                  &nbsp;&nbsp;&nbsp;
                                  <FaTrash
                                    size={13}
                                    className="text-red-500 cursor-pointer"
                                    onClick={() => handleDelete(row.id)}
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-3">
                      <nav>
                        <ul className="pagination">
                          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            >
                              ◀ Prev
                            </button>
                          </li>

                          {[...Array(Math.ceil(filteredRows.length / rowsPerPage))].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                              <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                              </button>
                            </li>
                          ))}

                          <li className={`page-item ${currentPage >= Math.ceil(filteredRows.length / rowsPerPage) ? "disabled" : ""}`}>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredRows.length / rowsPerPage)))}
                            >
                              Next ▶
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</div>

  );
}

export default List;
