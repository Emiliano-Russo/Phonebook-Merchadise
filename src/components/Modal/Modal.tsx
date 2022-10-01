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
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      {props.children}
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          style={{
            background: Colors.warning,
            color: "white",
            position: "absolute",
            top: "-10px",
            right: "-10px",
            borderRadius: "20px",
          }}
          onClick={props.onCancel}
        >
          X
        </button>
        <button
          style={{ background: Colors.primary, color: "white", borderRadius: "5px" }}
          onClick={props.onOk}
        >
          Ok
        </button>
      </div>
    </div>
  );
};
