import React from "react";
import {useNavigate} from "react-router-dom";
import logo from "../img/logo.png";
import signup from "../img/signup.png"

function Registration() {
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
            <div className={"Signup-block"}>
                <div className={"Signup-main-text"}>
                    Регистрация
                </div>
                <div className={"Signup-content-block"}>
                    <div className={"Signup-left-block"}>
                        <div className={"Signup-text"}>
                            Имя пользователя:
                        </div>
                        <input className={"Signup-input"} type={"text"}/>
                        <div className={"Signup-text"}>
                            Пароль:
                        </div>
                        <input className={"Signup-input"} type={"text"}/>
                        <div className={"Signup-text"}>
                            Подтвердите пароль:
                        </div>
                        <input className={"Signup-input"} type={"text"}/>
                        <div className={"Signup-agreement"}>
                            <div className={"Signup-agreement-text"}>
                                Нажимая на кнопку "Зарегистрироваться", вы соглашаетесь на хранение и обработку ваших персональных данных.
                            </div>
                        </div>
                    </div>
                    <div className={"Signup-right-block"}>
                        <img className={"Signup-image"} src={signup} alt={"signup"}/>
                        <button className={"Button-signup"} onClick={() => {navigate("/profile")}}>
                            Зарегистрироваться
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Registration;