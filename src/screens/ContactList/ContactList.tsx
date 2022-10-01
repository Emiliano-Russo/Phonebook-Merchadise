import { useEffect, useState } from "react";
import { Contact } from "../../components/Contact/Contact";
import { Modal } from "../../components/Modal/Modal";
import { PersonData, Person } from "../../types/contact.interface";

interface Props {
  data: Person[];
  addContact: (contact: PersonData) => void;
  deleteContact: (key: number) => void;
  editContact: (person: Person) => void;
}

export const ContactList = (props: Props) => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState<Person[]>([]);

  useEffect(() => {
    setContacts(props.data);
  }, [props.data]);

  console.log("contacts: ", contacts);
  console.log("props:", props.data);

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

  const search = (text: string) => {
    setContacts(props.data.filter((p) => p.name.toLowerCase().includes(text.toLowerCase())));
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
      <input
        style={{ margin: "10px 0 30px 0" }}
        placeholder="Search for contact by name..."
        onChange={(e) => search(e.target.value)}
      />
      <div style={{ height: "25rem", overflowY: "scroll" }}>
        {contacts.map((contact) => {
          return (
            <Contact
              deleteContact={props.deleteContact}
              editContact={props.editContact}
              person={contact}
            />
          );
        })}
      </div>
      <Modal isOpen={addContactModal} onOk={onAddContact} onCancel={onCancel} title="Add Contact">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <br />
        <input
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="Phone"
        />
        <br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      </Modal>
    </div>
  );
};
