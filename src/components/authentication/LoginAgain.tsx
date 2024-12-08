import { Outlet, Navigate } from "react-router-dom";
import { useUserStore } from "../../store/zustand/userstore";

export default function Loginagain() {
  const { user } = useUserStore();

  if (!user) {
    return <Outlet />;
  } else {
    return <Navigate to="/main/chat" />;
  }
}
