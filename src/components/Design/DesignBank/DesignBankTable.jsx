import { Button, Modal, Select } from "antd";
import React, { useState } from "react";

const DesignBankTable = ({ setSelectedCount, isModalOpen, setIsModalOpen }) => {
  const [checked, setChecked] = useState(true);
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSentClick = () => {
  //   setIsModalOpen(true);
  // };
  const customers = [
    { label: "John Doe", value: "john_doe" },
    { label: "Jane Smith", value: "jane_smith" },
    { label: "Michael Johnson", value: "michael_johnson" },
  ];
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Sample images
  const images = [
    "https://i.pinimg.com/736x/e3/20/39/e320392e9f9160484d2f2714ceca8e00.jpg",
    "https://i.pinimg.com/736x/6b/21/9a/6b219a4b7bc10241b3ffaaa415ed8a48.jpg",
  ];
  const handleConfirm = () => {
    setIsModalOpen(false);
    console.log("Confirmed!");
  };

  const handleChange = () => {
    debugger;
    if (checked) {
      setSelectedCount((prev) => prev + 1);
    } else {
      setSelectedCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            onChange={() => {
              setChecked(!checked);
              handleChange();
            }}
          />
        </td>
        <td>D-102</td>
        <td>Diamond Pendant</td>
        <td>Diamond Pendant</td>
        <td>Outsource</td>
        <td>Dew Diamonds</td>
        <td>Gold</td>
        <td>White</td>
      </tr>

      {/* Modal for showing image and description */}
      <Modal
        title="Item Details"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>,
          <Button
            key="confirm"
            type="primary"
            onClick={() => handleConfirm(selectedCustomer)}
            style={{ background: "#2a2f5b", color: "#fff" }}
            disabled={!selectedCustomer} // Prevent confirming without selection
          >
            Confirm
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          {/* Image and Content List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  textAlign: "left",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {/* Image on the Left */}
                <img
                  src={src}
                  alt={`Item ${index + 1}`}
                  style={{ width: "80px", height: "80px", borderRadius: "5px" }}
                />
                {/* Content on the Right */}
                <div>
                  <strong>Diamond Pendant</strong>
                  <p
                    style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}
                  >
                    A beautifully crafted diamond pendant with gold and white
                    finishing.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Dropdown */}
          <Select
            placeholder="Select a customer"
            style={{ width: "100%", marginTop: "10px" }}
            options={customers}
            onChange={setSelectedCustomer}
          />
        </div>
      </Modal>
    </>
  );
};

export default DesignBankTable;
