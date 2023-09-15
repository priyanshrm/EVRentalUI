import { useNavigate } from "react-router-dom";

function PrivateRoute({ element, ...rest }) {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? element : navigate("/");
}

export default PrivateRoute;
