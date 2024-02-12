import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Todo - Redux</h1>
      <AddTodo />
      <Todo />
    </Provider>
  );
}

export default App;
