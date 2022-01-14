import React from "react";
import {useNavigate} from "react-router-dom";
import {useResolvedPath} from "react-router";

function AppHeader(props) {
    let navigate = useNavigate();
    let resolved = useResolvedPath(props.page);

    return (
        <div className={"App-header-main"}>
            <button className={resolved.pathname === '/schedule' ? "Button-folder-active" : "Button-folder-inactive"} onClick={() => {navigate("/schedule")}}>
                Расписание
            </button>
            <button className={resolved.pathname === '/deadlines' ? "Button-folder-active" : "Button-folder-inactive"} onClick={() => {navigate("/deadlines")}}>
                Дедлайны
            </button>
            <button className={resolved.pathname === '/profile' ? "Button-folder-active" : "Button-folder-inactive"} onClick={() => {navigate("/profile")}}>
                Профиль
            </button>
        </div>
    )
}

export default AppHeader