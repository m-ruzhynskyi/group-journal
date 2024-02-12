import modules from './createMissed.module.css'
import uniqid from "uniqid";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {courses} from "../../../../../assets/data/otherFile";

export default function     CreateMissed({date, missedData, student, mode = 'journal'}){
    const navigate = useNavigate()
    const [close, setClose] = useState(false)
    function toClose() {
        setClose(true)
    }
    useEffect(() => {
        if (close ){
            (mode === 'journal') ? navigate('/main/journal'): navigate('/main')
        }
        // eslint-disable-next-line
    }, [close]);
    return (
        <>
            <div className={modules.missed}>
                <svg onClick={toClose} className={modules.closeSVG} height="45px" width="45px" version="1.1"
                     id="Capa_1"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"/>
                                    </g>
                                </g>
                            </svg>
                {mode === 'journal' ? (
                    <>
                        <div className={modules.head}>
                            <h2 className={modules.title}>Absent on {date} :</h2>
                        </div>
                        <div className={modules.main}>
                            <ul className={modules.ul}>
                                {missedData.map(element => {
                                    let students = Object.values(element)[0]['students']
                                    for (let id = 0; id < students.length - 1; id++) {
                                        students[id] = students[id] + ', '
                                    }
                                    return (
                                        <li key={uniqid()} className={modules.missedLi}>
                                            <h3 className={modules.subject}>{Object.values(element)[0]['course']} :</h3>
                                            <p className={modules.students}>{students.join('').toString()}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </>
                ): (
                    <>
                        <div className={modules.head}>
                            <h2 className={modules.title}>{student} was absent :</h2>
                        </div>
                        <div className={modules.main}>
                            <ul className={modules.ul}>
                                {missedData.length === 0 ?
                                    (<h3>Не пропускав пари!</h3>):
                                    missedData.map((dates, key) => {
                                        for (let id = 0; id < dates.length - 1; id++) {
                                            dates[id] = dates[id] + ', '
                                        }
                                        return (
                                            <li key={uniqid()} className={modules.missedLi}>
                                                <h3 className={modules.subject}>{courses[key]} :</h3>
                                                <p className={modules.students}>{dates.join('').toString()}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>

    );
}