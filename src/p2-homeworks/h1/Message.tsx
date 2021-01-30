import React from "react";
import s from "./Message.module.css"

type TaskType = {
   avatar: string
   name: string
   message: string
   time: string
}

function Message(props: TaskType) {
    return (
           <div className={s.Message}>
           <img src={props.avatar} alt="Avatar" className={s.avatar}/>
           <div className={s.textbox}>
           <h2 className={s.name}> {props.name}</h2>
           <p className={s.text}>{props.message}</p>
           <span className={s.time}>{props.time}</span>
           </div>
           </div>
    );
}

export default Message;
