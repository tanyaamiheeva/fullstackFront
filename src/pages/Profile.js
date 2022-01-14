import React, {useState} from "react";
import BackgroundPaper from "./commonElements/BackgroundPaper";
import AppHeader from "./commonElements/AppHeader";
import workImg from "../img/Work.jpg"

function ProfileContent() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [group, setGroup] = useState('')

    function handleInputChange(event, setter) {
        setter(event.target.value)
    }

    function handleChangeClick(field, fieldname) {
        console.log(field)                  // тут надо передать значение field в функцию общения с бэком, а бэк изменит это значение по ключу fieldname в БД
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div className={'Profile-input-flex'}>
                <p className={'Profile-input-title'}>Логин: </p>
                <input className={'Profile-input'} onChange={(event) => {handleInputChange(event, setLogin)}} type={'text'}/>
                <button className={'Blue-button'} onClick={() => {handleChangeClick(login, 'login')}}>изменить</button>
            </div>

            <div className={'Profile-input-flex'}>
                <p className={'Profile-input-title'}>Пароль: </p>
                <input className={'Profile-input'} onChange={(event) => {handleInputChange(event, setPassword)}} type={'text'}/>
                <button className={'Blue-button'} onClick={() => {handleChangeClick(password, 'password')}}>изменить</button>
            </div>

            <div className={"Section-title-block"}>
                <p className={"Section-title"}>
                    Дополнительная информация
                </p>
            </div>

            <hr size={'1'} style={{color: "black", marginTop: "1%", marginBottom: "1%",
                marginLeft: "0.001%", marginRight: "0.001%"}}/>

            <div style={{flexGrow: 1, position: 'relative'}}>
                <div className={'Profile-input-flex'}>
                    <p className={'Profile-input-title'}>Почта: </p>
                    <input className={'Profile-input'} onChange={(event) => {handleInputChange(event, setEmail)}} type={'text'}/>
                    <button className={'Blue-button'} onClick={() => {handleChangeClick(email, 'email')}}>изменить</button>
                </div>

                <div className={'Profile-input-flex'}>
                    <p className={'Profile-input-title'}>Группа: </p>
                    <input className={'Profile-input'} onChange={(event) => {handleInputChange(event, setGroup)}} type={'text'}/>
                    <button className={'Blue-button'} onClick={() => {handleChangeClick(group, 'group')}}>изменить</button>
                </div>

                <img src={workImg} style={{height: '100%', position: 'absolute', right: 0, bottom: 0}} alt={'deadlinesImg'}/>
            </div>


        </div>
    )
}

function Profile() {
    return(
        <div className={"Page"}>
            <AppHeader page={'/profile'}/>
            <BackgroundPaper paperHeader={'Профиль'} content={<ProfileContent/>}/>
        </div>
    )
}

export default Profile;