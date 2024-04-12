import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Notfound from "./pages/Notfound";
import { useAuth } from "./Context/AuthContext";

function App() {
   console.log(useAuth()?.isLoggedIn); 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}  ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />}  ></Route>
        <Route path="/chat" element={<Chat />}  ></Route>
        <Route path="*" element={<Notfound/>} ></Route>
      </Routes>
    </>
  )
}

export default App;
