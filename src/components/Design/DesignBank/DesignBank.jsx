import React, { useState } from "react";
import SideBar from "../../SideBar";
import Header from "../../Header";
import Footer from "../../Footer";
import DesignBankTable from "./DesignBankTable";

const DesignBank = () => {
    const [filters, setFilters] = useState({
        startDate: "",
        endDate: "",
        status: "",
        customer: "",
        orderId: "",
      });
    
      const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
      };
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <SideBar />
      {/* End Sidebar */}
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">Design Bank</h3>
              <ul className="breadcrumbs mb-3">
                <li className="nav-home">
                  <a href="#">
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                  <a href="#">Design</a>
                </li>
                <li className="separator">
                  <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                  <a href="#">Design Bank</a>
                </li>
              </ul>
            </div>

            <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-body filter-section">
                      <div className="row g-1 align-items-end">
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column">
                          <label className="filter-labels">Search</label>
                          <input
                            type="text"
                            className="form-control w-100"
                            name="customer"
                            placeholder="Search"
                            value={filters.customer}
                            onChange={handleFilterChange}
                          />
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
                    <div className="table-responsive">
                      <table
                        id="basic-datatables"
                        className="display table table-striped table-hover"
                      >
                        <thead>
                          <tr>
                            <th></th>
                            <th>Design</th>
                            <th>category</th>
                            <th>sub category</th>
                            <th>product type</th>
                            <th>brand</th>
                            <th>metal</th>
                            <th>metal color</th>
                          </tr>
                        </thead>
                        <tbody>
                          <DesignBankTable />
                          <DesignBankTable />

                        </tbody>
                      </table>
                    </div>
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
};

export default DesignBank;
