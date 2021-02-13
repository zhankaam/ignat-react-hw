import React, {useState} from "react";
import { homeWorkReducer, InitialStateType} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css"

export const initialPeople: InitialStateType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStateType[]>(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name}, {p.age}
           {/* some name, age*/}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_UP_STATE", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "SORT_DOWN_STATE", payload: "down"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "CHECK_STATE"}))

    return (
        <div>
            <hr/>
             <h3> homeworks 8</h3>

            {/*should work (должно работать)*/}

            {finalPeople}
            <div className={s.buttons}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
           {/* <hr/>*/}
        </div>
    );
}

export default HW8;
