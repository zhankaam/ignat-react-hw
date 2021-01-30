import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import style from "./GreetingContainer.module.css"

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string>(""); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement> ) => { // need to fix any
        setName(e.currentTarget.value)
        setError(""); // need to fix
    };
    const addUser = () => {
        if (name !== "" ) {
            alert(`Hello ${name} !`);
            addUserCallback(name)
        }
        else  setError("error")
        setName("")// need to fix
    };

    const totalUsers = users.length ; // need to fix

    return (
        <div className={style.content}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    );
}

export default GreetingContainer;
