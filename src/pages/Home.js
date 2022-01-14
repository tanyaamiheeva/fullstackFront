import React from "react";
import logo from "../img/logo.png"
import main_picture from "../img/main_page.png"
import {useNavigate} from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return(
        <div className={"Page"}>
            <div className={"App-header"}>
                <img className={"Left-header-positioning"} src={logo} alt={"logo"}/>
                <div className={"Flex-container Right-header-positioning"}>
                    <button className={"Button-main"} onClick={() => {navigate("/login")}}>
                        Вход
                    </button>
                </div>
            </div>
            <p className={"Main-header-text"}>
                Физтех.Ежедневник
            </p>
            <div className={"Main-page-block"}>
                <img className={"Main-image"} src={main_picture} alt={"main"}/>
                <div className={"Main-content"}>
                    <p className={"Main-text-subheader"}>
                        Удобный сервис для планирования и хранения заметок
                    </p>
                    <p className={"Main-text"}>
                        Составьте своё расписание, оставляйте заметки, чтобы точно ничего не пропустить и ни о чем не забыть. Cделайте свою учебу более комфортной и эффективной.
                    </p>
                    <button className={"Button-main"} onClick={() => {navigate("/signup")}}>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;