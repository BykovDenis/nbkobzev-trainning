import React from "react";
import s from './index.module.css';


export default function List(props) {
    
    return (
        <div >
          <p>Result sum: </p>
          <ul className={s.ul}>
            {props.arraySum.map(function (input) {
              return (<li>{input}</li>);
            })}
          </ul>
        </div>
    );
}