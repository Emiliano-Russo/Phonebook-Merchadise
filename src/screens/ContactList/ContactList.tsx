import { Contact } from "../../components/Contact/Contact";
import { ContactData } from "../../types/contact.interface";

interface Props {
  data: ContactData[];
}

export const ContactList = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30rem",
        margin: "0 auto",
        padding: "5px",
        textAlign: "center",
      }}
    >
      <h1>Contact List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Contacts</h2>
        <button
          style={{ background: "#007BFF", color: "white", padding: "5px 10px", border: "none" }}
        >
          + Add Contact
        </button>
      </div>
      <input style={{ margin: "10px 0 30px 0" }} placeholder="Search for contact by name..." />
      {props.data.map((contact) => {
        return <Contact {...contact} />;
      })}
    </div>
  );
};
