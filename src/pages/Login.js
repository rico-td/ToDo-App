import LoadingScreen from "../utils/LoadingScreen";
import style from "./Login.module.css";
import SignInForm from "../components/SignInForm/SignInForm";

function Login() {
  return (
    <div className={style.Login}>
      <LoadingScreen>
        <SignInForm />
      </LoadingScreen>
    </div>
  );
}
export default Login;
