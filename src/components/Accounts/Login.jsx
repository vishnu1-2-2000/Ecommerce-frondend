import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../Accounts/Login.css";
import { Card, Button, Form, Input } from "antd";
import { Link } from "react-router-dom"; // Import Link for navigation
import OIP from "./oip.jpg"
const Login = () => {
  const [form] = Form.useForm();
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (values) => {
    try {
      // Log the form values for debugging
      console.log("Form Values: ", values);

      // Make the POST request to your backend login endpoint
      const response = await axios.post(window.url + "login/", {
        username: values.username, // Use the 'email' field from form
        password: values.password,
      });

      // Store tokens in cookies
      Cookies.set("access", response.data.access, { expires: 1 }); // Expires in 1 day
      Cookies.set("refresh", response.data.refresh, { expires: 7 }); // Expires

      // After successful login, navigate to the desired page
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setWarningMessage("Invalid login credentials");
      } else if (error.request) {
        setWarningMessage("No response from server. Please try again.");
      } else {
        setWarningMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="col-6 image-container">
            <img alt="Logo" src={OIP} className="login-image" />
          </div>
          <div className="col-6 form-container">
            <Card hoverable className="card">
              <br />
              <h3 className="login-title">Welcome Back</h3>
              <div className="warning-container">
                {warningMessage && (
                  <div className="alert alert-danger" role="alert">
                    {warningMessage}
                  </div>
                )}
              </div>
              <Form
                form={form}
                name="login_form"
                onFinish={handleSubmit}
                layout="vertical"
              >
                <Form.Item
                  name="username"
                  label="Username"
                  rules={[
                    { required: true, message: "Please enter your Username!" },
                    // { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="Enter Email" className="login-input" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: "Please enter your password!" }]}
                >
                  <Input.Password
                    placeholder="Enter Password"
                    className="login-input"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    block
                    htmlType="submit"
                    className="login-btn"
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>

              <div className="signup-link">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="signup-link-text">
                    Sign up here
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
