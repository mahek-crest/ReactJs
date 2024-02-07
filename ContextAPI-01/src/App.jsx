import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfilePage from "./components/ProfilePage";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>heelooos</h1>
      <Login />
      <Profile />
      <ProfilePage />
    </UserContextProvider>
  );
}

export default App;
