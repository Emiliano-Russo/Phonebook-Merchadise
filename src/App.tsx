import React from "react";
import "./App.css";
import { ContactList } from "./screens/ContactList/ContactList";

const data = [
  { name: "Pedro", telephone: "092481264", email: "pedro7@gmail.com" },
  { name: "Maria", telephone: "45712456", email: "maria08@gmail.com" },
];

function App() {
  return (
    <div style={{ background: "whitesmoke" }}>
      <ContactList data={data} />
    </div>
  );
}

export default App;
