import { Route, Routes } from "react-router";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}
