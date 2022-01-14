import React, {useState} from "react";
import BackgroundPaper from "./commonElements/BackgroundPaper";
import AppHeader from "./commonElements/AppHeader";
import pen_img from "../img/pen.png";

const scheduleLists = {
    mon: [
        'ТФКП (Б.Физ)',
        'Метопты (Б.Физ)',
        null,
        null,
        null,
        null,
        null,
    ],
    tue: [
        'ТФКП (Б.Физ)',
        'Метопты (Б.Физ)',
        null,
        null,
        null,
        null,
        null,
    ],
    wed: [
        'ТФКП (Б.Физ)',
        'Метопты (Б.Физ)',
        null,
        null,
        null,
        null,
        null,
    ],
    thu: [
        null,
        null,
        'ТФКП (Б.Физ)',
        null,
        'Метопты (Б.Физ)',
        null,
        null,
    ],
    fri: [
        'ТФКП (Б.Физ)',
        'Метопты (Б.Физ)',
        null,
        null,
        null,
        null,
        null,
    ],
    sat: [
        null,
        'Метопты (Б.Физ)',
        'ТФКП (Б.Физ)',
        null,
        null,
        null,
        null,
    ]
}

function ScheduleInput(props) {
    const [lesson, setLesson] = useState(props.lesson || '')

    return (
        <input value={lesson} onChange={(event) => {setLesson(event.target.value)}}/>
    )
}

function DayTable(props) {
    const times = [
        '9.00 - 10.25',
        '10.45 - 12.10',
        '12.20 - 13.45',
        '13.55 - 15.20',
        '15.30 - 16.55',
        '17.05 - 18.30',
        '18.35 - 20.00',
    ]

    return (
        <div style={{width: '30%'}}>
            <p style={{textAlign: 'center', fontWeight: 'bold', margin: '0.3em 0'}}>{props.title}</p>
            <table style={{width: '100%'}} frame={'border'}>
                <tbody>
                {
                    times.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td style={{width: '50%', minWidth: '6em'}}>{value}</td>
                                {props.edit ?
                                    <td>{<ScheduleInput {...props} index={index} lesson={scheduleLists[props.dayKey][index]}/>}</td>
                                    :
                                    <td>{scheduleLists[props.dayKey][index]}</td>
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

function ScheduleContent(props) {
    return (
        <div style={{height: '-webkit-fill-available', overflow: 'scroll'}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <DayTable {...props} title={'понедельник'} dayKey={'mon'}/>
                <DayTable {...props} title={'вторник'} dayKey={'tue'}/>
                <DayTable {...props} title={'среда'} dayKey={'wed'}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <DayTable {...props} title={'четверг'} dayKey={'thu'}/>
                <DayTable {...props} title={'пятница'} dayKey={'fri'}/>
                <DayTable {...props} title={'суббота'} dayKey={'sat'}/>
            </div>
        </div>
    )
}

function Schedule() {
    const [edit, setEdit] = useState(false)

    return (
        <div className={"Page"}>
            <AppHeader page={'/schedule'}/>
            <BackgroundPaper paperHeader={'Расписание'}
                             content={<ScheduleContent edit={edit}/>}
                             headerButton={
                                 edit ?
                                     <button className={"Blue-button"} style={{marginRight: '3em'}} onClick={() => {setEdit(false)}}>
                                         <img className={"Schedule-pen"} src={pen_img} alt={"pen"}/>
                                         Просмотр
                                     </button>
                                     :
                                     <button className={"Blue-button"} style={{marginRight: '3em'}} onClick={() => {setEdit(true)}}>
                                         <img className={"Schedule-pen"} src={pen_img} alt={"pen"}/>
                                         Редактировать
                                     </button>
                             }/>
        </div>
    )
}

export default Schedule;