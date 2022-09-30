import { ContactData } from "../../types/contact.interface";

export const Contact = (props: ContactData) => {
  return (
    <div
      style={{
        padding: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "start",
        backgroundColor: "white",
        marginBottom: "2px",
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
            background: "#199E31",
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20px", margin: "auto" }}
            src="https://img.icons8.com/ios-filled/50/FFFFFF/edit--v1.png"
          />
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgb(220,53,69)",
            border: "none",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20px", margin: "auto" }}
            src="https://img.icons8.com/ios-glyphs/60/FFFFFF/trash--v1.png"
          />
        </button>
      </div>
    </div>
  );
};
