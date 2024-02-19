import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const users = [
    { firstName: "John", id: 1 },
    { firstName: "Emily", id: 2 },
    { firstName: "Michael", id: 3 },
    { firstName: "Sarah", id: 4 },
    { firstName: "David", id: 5 },
    { firstName: "Jessica", id: 6 },
    { firstName: "Daniel", id: 7 },
    { firstName: "Olivia", id: 8 },
    { firstName: "Matthew", id: 9 },
    { firstName: "Sophia", id: 10 },
  ];

  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearchChange = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);

    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchItem.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <Search searchItem={searchItem} handleSearchChange={handleSearchChange} />
      <List users={filteredUsers} />
    </>
  );
}

export default App;
