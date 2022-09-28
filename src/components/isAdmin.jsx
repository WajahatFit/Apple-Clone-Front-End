import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function IsAdmin({ children }) {
  const { IsAdmin } = useContext(AuthContext);
  if (!IsAdmin) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default IsAdmin;
