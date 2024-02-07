import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const [name, setName] = useState([]);

  const handleNameChange = (e) => {
    let newName = e.target.value;
    setName(newName);
    console.log(newName);
  };

  const contacts = [
    {
      id: 1,
      name: "Person1",
      email: "person1@gmail.com",
    },
    {
      id: 2,
      name: "Person2",
      email: "person2@gmail.com",
    },
  ];

  return (
    <>
      <Header />
      <AddContact name={name} onNameChange={handleNameChange} />
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
