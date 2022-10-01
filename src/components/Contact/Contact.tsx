import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { ContactData } from "../../types/contact.interface";

export const Contact = (props: ContactData) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div
      style={{
        padding: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "start",
        backgroundColor: "white",
        marginBottom: "5px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      }}
    >
      <div>
        <div>
          <h2 style={{ margin: "0px" }}>{props.name}</h2>
          <p style={{ margin: "0px", color: "gray" }}>{props.telephone}</p>
          <p style={{ margin: "0px", color: "gray" }}>{props.email}</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: Colors.green,
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20px", margin: "auto" }}
            src="https://img.icons8.com/ios-filled/50/FFFFFF/edit--v1.png"
            alt="Edit"
          />
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: Colors.warning,
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20px", margin: "auto" }}
            src="https://img.icons8.com/ios-glyphs/60/FFFFFF/trash--v1.png"
            alt="X"
          />
        </button>
      </div>
    </div>
  );
};
