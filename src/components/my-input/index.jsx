import React from "react";


export default function Myinpunts(props) {


    return (
        <div className={props.divclassName}>
            <label for={props.id} placeholder={props.placeholder} className={props.lableclassName}>{props.lable}</label>
            <input id={props.id} type="text" placeholder={props.placeholder} required className={props.inputclassName} value={props.value} onChange={props.onChange} />
        </div>
    );
}