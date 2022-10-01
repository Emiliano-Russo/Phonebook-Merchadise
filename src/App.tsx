import React, { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "./screens/ContactList/ContactList";
import { Contact, ContactData } from "./types/contact.interface";

const mocked_data: Contact[] = [
  { key: 1, name: "Pedro", telephone: "092481264", email: "pedro7@gmail.com" },
  { key: 2, name: "Maria", telephone: "45712456", email: "maria08@gmail.com" },
];

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(mocked_data);
  }, []);

  const addContact = (contactParam: ContactData) => {
    setContacts((prev) => {
      const cloned = [...prev];
      const contact: Contact = {
        key: cloned[cloned.length - 1].key,
        name: contactParam.name,
        email: contactParam.email,
        telephone: contactParam.telephone,
      };
      cloned.push(contact);
      return cloned;
    });
  };

  const deleteContact = (key: number) => {
    setContacts((prev) => {
      const cloned = [...prev];
      const index = cloned.findIndex((contact) => contact.key == key);
      cloned.splice(index, 1);
      return cloned;
    });
  };

  const editContact = (key: number, contact: ContactData) => {
    setContacts((prev) => {
      const cloned = [...prev];
      const index = cloned.findIndex((contact) => contact.key == key);
      cloned[index].email = contact.email;
      cloned[index].name = contact.name;
      cloned[index].telephone = contact.telephone;
      return cloned;
    });
  };

  return (
    <>
      <ContactList
        addContact={addContact}
        deleteContact={deleteContact}
        editContact={editContact}
        data={contacts}
      />
    </>
  );
}

export default App;
