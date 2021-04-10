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

       const buttonStyles = {
         width: "70px",
         height: "30px",
         borderRadius: "30px",
         borderColor: "cornflowerblue",
       }

    return <div>
        <input type={"checkbox"} onClick={() => setValue(true) }/> <span>{message}</span>
        <button onClick={() => sendRequest(value)} style={buttonStyles}>request</button>
    </div>
}