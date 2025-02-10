import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import { useState } from "react";
import PdTableData from "./PdTableData";
const PdLists = () => {
  const [showEdit, setShowEdit] = useState(null);

  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <SideBar />
        {/* End Sidebar */}
        <div className="main-panel">
          <Header />
          <div className="container">
            <div className="page-inner">
              <div className="page-header">
                <h3 className="fw-bold mb-3">PD/Order Lists</h3>
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
                    <a href="#">PD/Concept</a>
                  </li>
                  <li className="separator">
                    <i className="icon-arrow-right"></i>
                  </li>
                  <li className="nav-item">
                    <a href="#">Lists</a>
                  </li>
                </ul>
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
                              <th>Date</th>
                              <th>Concept Id</th>
                              <th>Customer</th>
                              <th>Promised Date</th>
                              <th>Status</th>
                              <th>Sketches</th>
                              <th>CAD</th>
                              <th>Designs</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <PdTableData />
                            </tr>
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
    </>
  );
};

export default PdLists;
