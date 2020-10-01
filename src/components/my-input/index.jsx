import React from "react";
import style from './index.module.css';


export default function Myinpunt(props) {


    return (
        <div className={style.item}>
            <label for={props.id} placeholder={props.placeholder} className={style.label}>{props.lable}</label>
            <input id={props.id} type="text" placeholder={props.placeholder} required className={style.input} value={props.value} onChange={props.onChange} />
        </div>
    );
}