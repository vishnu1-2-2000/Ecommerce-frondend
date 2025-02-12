import { Button, Modal } from "antd";
import React, { useState } from "react";

const DesignBankTable = () => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSentClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    console.log("Confirmed!");
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            style={{ cursor: "pointer" }}
            onChange={() => setChecked(!checked)}
          />
        </td>
        <td>D-102</td>
        <td>Diamond Pendant</td>
        <td>Diamond Pendant</td>
        <td>Outsource</td>
        <td>Dew Diamonds</td>
        <td>Gold</td>
        <td>White</td>
        <td>
          {checked && (
            <Button
              style={{ background: "#2a2f5b", color: "white", margin: "0 2px" }}
              onClick={handleSentClick}
            >
              Sent
            </Button>
          )}
        </td>
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
          <Button key="confirm" type="primary" onClick={handleConfirm} style={{background: "#2a2f5b", color: "#fff"}}>
            Confirm
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <img
            src="https://i.pinimg.com/736x/e3/20/39/e320392e9f9160484d2f2714ceca8e00.jpg"
            alt="Diamond Pendant"
            style={{ width: "100px", height: "100px", marginBottom: "10px" }}
          />
          <p>
            <strong>Diamond Pendant</strong> - A beautifully crafted diamond pendant with gold and white finishing.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default DesignBankTable;
