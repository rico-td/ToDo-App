import { useParams } from "react-router-dom";

function Login() {
  const { id } = useParams();
  return <h1>Welcome to {id}</h1>;
}
export default Login;
