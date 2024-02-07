import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoData }) => {
  const contextObj = useContext(TodoItemsContext);
  const deleteItem = contextObj.deleteItem;

  return (
    <div className="row row-container">
      <div className="col-6">
        <p>{todoName} </p>
      </div>
      <div className="col-4">
        <p>{todoData}</p>
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger btn-container"
          onClick={() => deleteItem({ todoName })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
