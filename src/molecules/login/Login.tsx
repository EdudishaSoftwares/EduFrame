import style from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
const Login = () => {
  return (
    <div className={cx(
        "login-component"
      )}>
        <header>

        </header>
        <main></main>
        <footer>
            <img src="loginIllustration2.svg" alt="" />
            <div className={cx("logo")}>
                <img src="edudisha-wbg.png" alt="Edudisha"></img>
            </div>
            <img src="loginIllustration.svg" alt="" />
        </footer>
      </div>
  );
}

export default Login;