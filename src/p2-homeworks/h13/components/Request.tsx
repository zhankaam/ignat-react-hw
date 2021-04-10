import React, { useState} from "react";
import {RequestAPI} from "../api/RequestAPI";

export function Request() {

    const [value,setValue] = useState<boolean>(false)
    const [message,setMessage] = useState<string>("change status")


       const sendRequest = (status: boolean) => {
           RequestAPI.post(status)
               .then(res => {
               setMessage(res.data)
           })
       }


    return <div>
        <input type={"checkbox"} onClick={() => setValue(true) }/> <span>{message}</span>
        <button onClick={() => sendRequest(value)}>request</button>

    </div>
}