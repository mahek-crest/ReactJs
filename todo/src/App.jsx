import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import { useState } from "react";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const adddNewItem = (itemName, itemDueDate) => {
    const newItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
    setTodoItems(newItems);
  };

  const deleteItem = (todoName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoName);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        adddNewItem: adddNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;
