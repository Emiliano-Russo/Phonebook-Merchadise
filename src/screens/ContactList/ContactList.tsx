import { useState } from "react";
import { Contact } from "../../components/Contact/Contact";
import { Modal } from "../../components/Modal/Modal";
import { ContactData } from "../../types/contact.interface";

interface Props {
  data: ContactData[];
  addContact: (contact: ContactData) => void;
  deleteContact: (key: number) => void;
  editContact: (key: number, contact: ContactData) => void;
}

export const ContactList = (props: Props) => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const onAddContact = () => {
    props.addContact({ name, telephone, email });
    cleanData();
  };

  const onCancel = () => {
    cleanData();
    setAddContactModal(false);
  };

  const cleanData = () => {
    setName("");
    setTelephone("");
    setEmail("");
  };

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
          onClick={() => setAddContactModal(true)}
        >
          + Add Contact
        </button>
      </div>
      <input style={{ margin: "10px 0 30px 0" }} placeholder="Search for contact by name..." />
      {props.data.map((contact) => {
        return <Contact {...contact} />;
      })}
      <Modal isOpen={addContactModal} onOk={onAddContact} onCancel={onCancel} title="Add Contact">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Phone"
        />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </Modal>
    </div>
  );
};
