import React from "react";
import Table from "./Table";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

const DataTable = () => {
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
            <Table />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DataTable;
