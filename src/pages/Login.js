import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../img/logo.png";

function Login() {
    let navigate = useNavigate();
    return(
        <div className={"Page"}>
            <div className={"App-header"}>
                <img className={"Left-header-positioning"} src={logo} alt={"logo"}/>
                <div className={"Flex-container Right-header-positioning"}>
                    <button className={"Button-to-home"} onClick={() => {navigate("/")}}>
                        На главную
                    </button>
                </div>
            </div>
            <div className={"Login-block"}>
                <div className={"Login-text-header"}>
                    Вход
                </div>
                <div className={"Login-text"}>
                    Имя пользователя:
                </div>
                <input className={"Login-input"} type={"text"}/>
                <div className={"Login-text"}>
                    Пароль:
                </div>
                <input className={"Login-input"} type={"text"}/>
                <button className={"Button-login"} onClick={() => {navigate("/profile")}}>
                    Войти
                </button>
                <div className={"Login-text-signup"}>
                    Еще нет аккаунта?
                    <a className={"Login-link-signup"} href={"/signup"}>Зарегистрируйтесь!</a>
                </div>
            </div>
        </div>
    )
}

export default Login;