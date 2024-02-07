import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Welcome = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <>
        <h4>Enjoy your day!</h4>
        <br />
      </>
    )
  );
};

export default Welcome;
