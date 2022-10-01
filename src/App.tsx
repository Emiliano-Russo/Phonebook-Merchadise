import React, { useEffect, useState } from "react";
import "./App.css";
import { ContactList } from "./screens/ContactList/ContactList";
import { Person, PersonData } from "./types/contact.interface";

const mocked_data: Person[] = [
  { key: 1, name: "Pedro", telephone: "092481264", email: "pedro7@gmail.com" },
  { key: 2, name: "Maria", telephone: "45712456", email: "maria08@gmail.com" },
  { key: 3, name: "Fernando", telephone: "21289745", email: "fer1995@gmail.com" },
  { key: 4, name: "Natalia", telephone: "51514204", email: "naty@gmail.com" },
  { key: 5, name: "Bernardo", telephone: "1087168", email: "bar09@gmail.com" },
];

function App() {
  const [contacts, setContacts] = useState<Person[]>([]);

  useEffect(() => {
    setContacts(mocked_data);
  }, []);

  const addContact = (contactParam: PersonData) => {
    setContacts((prev) => {
      const cloned = [...prev];
      const contact: Person = {
        key: cloned[cloned.length - 1].key + 1,
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

  const editContact = (person: Person) => {
    setContacts((prev) => {
      const cloned = [...prev];
      const index = cloned.findIndex((contact) => contact.key == person.key);
      cloned[index].email = person.email;
      cloned[index].name = person.name;
      cloned[index].telephone = person.telephone;
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
