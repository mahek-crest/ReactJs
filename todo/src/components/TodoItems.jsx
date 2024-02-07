import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems; ---> same can be declared with destructuring

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsList}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoData={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
