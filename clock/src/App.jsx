import AppHead from "./components/AppHead";
import AppName from "./components/AppName";
import ClockPara from "./components/ClockPara";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <center style={{ background: "#888" }}>
      <AppName />
      <AppHead />
      <ClockPara />
    </center>
  );
};

export default App;
