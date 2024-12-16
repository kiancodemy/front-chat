import { Route, Routes } from "react-router";
import LoginControl from "./components/chat/LoginControl";
import Home from "./pages/Home";
import Loginagain from "./components/authentication/LoginAgain";
import Chatcontainer from "./pages/Chatcontainer";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Loginagain />}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="main" element={<LoginControl></LoginControl>}>
          <Route path="chat" element={<Chatcontainer></Chatcontainer>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
