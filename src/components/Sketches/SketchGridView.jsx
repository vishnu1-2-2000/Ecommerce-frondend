import { Row } from "antd";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import SketchCard from "./SketchCard";

const SketchGridView = () => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <SideBar />

      {/* Main Panel */}
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <Row gutter={[16, 16]} justify="center">
              <SketchCard />
              <SketchCard />
              <SketchCard />
              <SketchCard />
              <SketchCard />
              <SketchCard />
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SketchGridView;
