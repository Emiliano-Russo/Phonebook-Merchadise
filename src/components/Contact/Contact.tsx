import { useState } from "react";
import { Colors } from "../../constants/Colors";
import { Person, PersonData } from "../../types/contact.interface";
import { Modal } from "../Modal/Modal";

interface Props {
  deleteContact: (key: number) => void;
  editContact: (person: Person) => void;
  person: Person;
}

export const Contact = (props: Props) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [person, setPerson] = useState<Person>(props.person);

  const deleteContact = () => {
    props.deleteContact(props.person.key);
    setDeleteOpen(false);
  };

  const editContact = () => {
    props.editContact(person);
    setEditOpen(false);
  };

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
          <h2 style={{ margin: "0px" }}>{props.person.name}</h2>
          <p style={{ margin: "0px", color: "gray" }}>{props.person.telephone}</p>
          <p style={{ margin: "0px", color: "gray" }}>{props.person.email}</p>
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
          onClick={() => setEditOpen(true)}
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
          onClick={() => setDeleteOpen(true)}
        >
          <img
            style={{ width: "20px", margin: "auto" }}
            src="https://img.icons8.com/ios-glyphs/60/FFFFFF/trash--v1.png"
            alt="X"
          />
        </button>
        <Modal
          isOpen={deleteOpen}
          title={"Delete " + props.person.name + "?"}
          onOk={deleteContact}
          onCancel={() => setDeleteOpen(false)}
        ></Modal>
        <Modal
          isOpen={editOpen}
          title={"Edit"}
          onOk={editContact}
          onCancel={() => setEditOpen(false)}
        >
          <input
            placeholder="name"
            value={person.name}
            onChange={(event) =>
              setPerson((prev) => {
                const cloned = { ...prev };
                cloned.name = event.target.value;
                return cloned;
              })
            }
          ></input>
          <br></br>
          <input
            placeholder="telephone"
            value={person.telephone}
            onChange={(event) =>
              setPerson((prev) => {
                const cloned = { ...prev };
                cloned.telephone = event.target.value;
                return cloned;
              })
            }
          ></input>
          <br></br>
          <input
            placeholder="email"
            value={person.email}
            onChange={(event) =>
              setPerson((prev) => {
                const cloned = { ...prev };
                cloned.email = event.target.value;
                return cloned;
              })
            }
          ></input>
        </Modal>
      </div>
    </div>
  );
};
