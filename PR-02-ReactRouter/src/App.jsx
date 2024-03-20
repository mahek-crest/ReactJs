import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Design from "./pages/Design";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<Design />} />
        </Route>
      </Routes>
    </Router>
  );
  // return <Home />;
}

export default App;
