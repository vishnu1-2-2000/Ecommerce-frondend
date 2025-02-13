import React from "react";
import { Form, Input, Select, DatePicker, Upload, Button, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Footer from "../Footer";
import Header from "../Header";
import SideBar from "../SideBar";
import { useSelector } from "react-redux";

const { Option } = Select;

const CreatePdOrder = () => {
 const sideBarState = useSelector(state => state?.sidebar?.sideBar)

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className={`wrapper ${sideBarState ? 'sidebar_minimize' : ""}`}>

      <SideBar />
      <div className="main-panel">
        <Header />
        <div className="container">
          <div className="page-inner">
            <div className="page-header">
              <h3 className="fw-bold mb-3">PD/Concept</h3>
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
                    <a href="#">Create PD</a>
                  </li>
                </ul>
            </div>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Customer" name="customer"  rules={[{ required: true, message: "Please select customer" }]}>
                    <Select placeholder="Select Customer">
                      <Option value="1">Customer 1</Option>
                      <Option value="2">Customer 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Email" name="email">
                    <Input disabled placeholder="Enter email" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Mobile" name="mobile">
                    <Input disabled placeholder="Enter mobile number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Customer Code" name="customerCode">
                    <Input disabled placeholder="Enter customer code" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Date" name="date">
                    <Input disabled placeholder="Enter date" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Promised Date" name="promisedDate"  rules={[{ required: true, message: "Please select promised date" }]}>
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Required Count" name="requiredCount"  rules={[{ required: true, message: "Please enter required count" }]}>
                    <Input placeholder="Enter required count" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Product Type" name="productType"  rules={[{ required: true, message: "Please select product type" }]}>
                    <Select placeholder="Select product type">
                      <Option value="1">Type 1</Option>
                      <Option value="2">Type 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Category Group" name="categoryGroup"  rules={[{ required: true, message: "Please select category group" }]}>
                    <Select placeholder="Select category group">
                      <Option value="1">Group 1</Option>
                      <Option value="2">Group 2</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Gender" name="gender"  rules={[{ required: true, message: "Please select gender" }]}>
                    <Select placeholder="Select gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Metal Type" name="metalType"  rules={[{ required: true, message: "Please select metal type" }]}>
                    <Select placeholder="Select metal type">
                      <Option value="gold">Gold</Option>
                      <Option value="silver">Silver</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Expected Gross Weight" name="grossWeight"  rules={[{ required: true, message: "Please enter gross weight" }]}>
                    <Input placeholder="Enter gross weight" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label="Diamond Range" name="diamondRange"  rules={[{ required: true, message: "Please select diamond range" }]}>
                    <Select placeholder="Select diamond range">
                      <Option value="low">Low</Option>
                      <Option value="high">High</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Expected Net Weight" name="netWeight"  rules={[{ required: true, message: "Please enter expected net.wt" }]}>
                    <Input placeholder="Enter net weight" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Choose Image File" name="image">
                    <Upload beforeUpload={() => false}>
                      <Button icon={<UploadOutlined />}>Upload File</Button>
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item label="Comment" name="comment">
                <Input.TextArea rows={4} placeholder="Enter your comment" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{background: "#2a2f5b"}}>
                  Submit
                </Button>
                <Button type="default" style={{ marginLeft: 8 }}>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CreatePdOrder;