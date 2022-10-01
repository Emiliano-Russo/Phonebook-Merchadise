import { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";

interface Props {
  isOpen: boolean;
  title: string;
  onOk: () => void;
  onCancel: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<Props> = (props: Props) => {
  if (!props.isOpen) return null;

  return (
    <div
      style={{
        position: "absolute",
        background: "white",
        top: "20%",
        left: "50%",
        padding: "20px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        border: "1px solid black",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>{props.title}</h3>
      {props.children}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button style={{ background: Colors.warning, color: "white" }} onClick={props.onCancel}>
          Close
        </button>
        <button style={{ background: Colors.primary, color: "white" }} onClick={props.onOk}>
          Ok
        </button>
      </div>
    </div>
  );
};
