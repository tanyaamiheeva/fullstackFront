import React, {useState} from "react";
import BackgroundPaper from "./commonElements/BackgroundPaper";
import AppHeader from "./commonElements/AppHeader";
import penIcon from "../img/pen.png"
import deleteIcon from "../img/delete.png"
import deadlinesImg from '../img/5293.jpg'

function DeadlinesContent() {
    const [deadlinesList, setDeadlinesList] = useState([
        {
            date: new Date(),
            description: 'Задание 1'
        },
        {
            date: new Date(),
            description: 'Задание 2'
        },
        {
            date: new Date(),
            description: 'Задание 3'
        },
        {
            date: new Date(),
            description: 'Задание 4'
        },
    ])

    let tmp = new Date(Date.now());
    let dateInputFormatted = tmp.toISOString().split('T')[0];

    const [newDeadlineDate, setNewDeadlineDate] = useState(dateInputFormatted)
    const [newDeadlineDesc, setNewDeadlineDesc] = useState('')

    function deleteDeadline(index) {
        // console.log(index)
        let tmp = deadlinesList.slice()
        tmp.splice(index, 1);
        setDeadlinesList(tmp)
    }

    function addDeadline() {
        let tmp = deadlinesList.slice()
        // console.log()
        tmp.push({
            date: new Date(newDeadlineDate),
            description: newDeadlineDesc
        })
        setDeadlinesList(tmp)
    }

    const [edit, setEdit] = useState(false)
    const [deleteRecord, setDeleteRecord] = useState(false)
    const [chosenDeadline, setChosenDeadline] = useState(null)

    const [editDeadlineDate, setEditDeadlineDate] = useState(dateInputFormatted)
    const [editDeadlineDesc, setEditDeadlineDesc] = useState('')

    function saveChanges(index) {
        let tmp = deadlinesList.slice()
        tmp[index].date = new Date(editDeadlineDate);
        tmp[index].description = editDeadlineDesc;
        setDeadlinesList(tmp)
    }

    return (
        <div className={'Deadlines-box'}>
            <div className={'Deadlines-list'}>
                <p className={'Deadlines-list-header'}>Список дедлайнов</p>

                <ul>
                    {deadlinesList.map((value, index) => {
                        return (
                            <li key={index}>
                                <div className={'Deadlines-list-flex'}>
                                    {value.date.toLocaleDateString() + ' - ' + value.description}
                                    <div>
                                        <img style={{height: '14px'}} src={penIcon} alt={'pen'} onClick={() => {
                                            setChosenDeadline(index);
                                            setEditDeadlineDate(value.date.toISOString().split('T')[0])
                                            // tmp.toISOString().split('T')[0]
                                            setEditDeadlineDesc(value.description)
                                            setEdit(true)}}/>
                                        <img style={{height: '14px', padding: '0 5px'}} onClick={() => {
                                            setChosenDeadline(index)
                                            setDeleteRecord(true)
                                        }} src={deleteIcon} alt={'delete'}/>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {edit ?
                <div>
                    <div className={'popupBlur'}/>
                    <div className={'popup'}>
                        <p className={'popupHeader'}>Редактирование записи</p>

                        <div className={'Deadlines-input-flex'}>
                            <b style={{padding: '0.3em'}}>Изменить дату:</b>
                            <input className={'Deadlines-paper-input'}
                                   value={editDeadlineDate}
                                   onChange={(event) => {
                                       setEditDeadlineDate(event.target.value)
                                   }}
                                   type={'date'}/>
                        </div>
                        <div>
                            <b style={{padding: '0.3em'}}>Изменить описание:</b>
                            <textarea value={editDeadlineDesc}
                                      onChange={(event) => {
                                          setEditDeadlineDesc(event.target.value)
                                      }}
                                      className={'Deadlines-paper-input'}/>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '1em'}}>
                            <button className={'Blue-button'} onClick={() => {setEdit(false)}}>Отмена</button>
                            <button className={'Blue-button'} onClick={() => {setEdit(false); saveChanges(chosenDeadline)}}>Сохранить</button>
                        </div>
                    </div>
                </div>
                :
                null
            }

            {deleteRecord ?
                <div>
                    <div className={'popupBlur'}/>
                    <div className={'popup'}>
                        <p className={'popupHeader2'}>Вы действительно хотите удалить
                            запись?</p>
                        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '1em'}}>
                            <button className={'Blue-button'} onClick={() => {
                                deleteDeadline(chosenDeadline)
                                setDeleteRecord(false);
                            }}>Да
                            </button>
                            <button className={'Blue-button'} onClick={() => {
                                setDeleteRecord(false)
                            }}>Нет
                            </button>
                        </div>
                    </div>
                </div>
                :
                null
            }

            <div style={{height: '94%', width: '40%', display: 'flex', flexDirection: 'column'}}>
                <div className={'Add-deadline'}>
                    <p className={'Deadlines-list-header'}>Добавить дедлайн</p>
                    <div className={'Deadlines-input-flex'}>
                        <b style={{padding: '0.3em'}}>Дата:</b>
                        <input className={'Deadlines-paper-input'}
                               value={newDeadlineDate}
                               onChange={(event) => {
                                   setNewDeadlineDate(event.target.value)
                               }}
                               type={'date'}/>
                    </div>
                    <div>
                        <b style={{padding: '0.3em'}}>Описание:</b>
                        <textarea value={newDeadlineDesc}
                                  onChange={(event) => {
                                      setNewDeadlineDesc(event.target.value)
                                  }}
                                  className={'Deadlines-paper-input'}/>
                    </div>
                </div>
                <div style={{justifyContent: 'flex-end', display: 'flex'}}>
                    <button className={'Blue-button'} onClick={addDeadline} style={{marginTop: '5px'}}>Добавить</button>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexGrow: 1, position: 'relative'}}>
                    <img src={deadlinesImg} style={{position: 'absolute', maxHeight: '100%', maxWidth: '100%'}} alt={'deadlinesImg'}/>
                </div>
            </div>



        </div>
    )
}

function Deadlines() {
    return(
        <div className={"Page"}>
            <AppHeader page={'/deadlines'}/>
            <BackgroundPaper paperHeader={'Дедлайны'} content={<DeadlinesContent/>}/>
        </div>
    )
}

export default Deadlines;