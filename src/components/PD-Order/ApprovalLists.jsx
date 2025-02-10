import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";

const ApprovalLists = () => {
  const [approvalStatus, setApprovalStatus] = useState("Approved");

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
                <h3 className="fw-bold mb-3">Approval Lists</h3>
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
                    <a href="#">Approval Lists</a>
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
                              <th>Concept Id</th>
                              <th>Date</th>
                              <th>Customer</th>
                              <th>Category</th>
                              <th>Promised Date</th>
                              <th>Approval</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>c-108</td>
                              <td>10 Feb 2025</td>
                              <td>Dew Diamonds</td>
                              <td>Diamond Nosepin</td>
                              <td>20 Feb 2025</td>
                              <td>
                                <select
                                  value={approvalStatus}
                                  onChange={(e) => setApprovalStatus(e.target.value)}
                                  className="form-select"
                                >
                                  <option value="Approved">Approved</option>
                                  <option value="Pending">Pending</option>
                                  <option value="Rejected">Rejected</option>
                                  <option value="Initiated">Initiated</option>
                                </select>
                              </td>
                              <td>Moved to Sketch</td>
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

export default ApprovalLists;
