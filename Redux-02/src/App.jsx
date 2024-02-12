import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <h2>hello</h2>
      <Counter />
    </Provider>
  );
}

export default App;
