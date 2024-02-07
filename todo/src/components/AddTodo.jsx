import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const contextObj = useContext(TodoItemsContext);
  const adddNewItem = contextObj.adddNewItem;

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    // setTodoName();
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
    // setDueDate();
  };

  const handleAddClickButton = (e) => {
    e.preventDefault();
    adddNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="row row-container">
        <form className="row kg-row" onSubmit={handleAddClickButton}>
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter your task"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" name="" id="" onChange={handleDueDateChange} />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-success btn-container"
              value={dueDate}
            >
              <IoMdAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
