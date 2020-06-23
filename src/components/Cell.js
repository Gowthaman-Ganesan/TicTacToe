import React from "react";
import {IoIosRadioButtonOff, IoMdClose} from "react-icons/io";

export default function Cell(props) {
    return (
        <button className={`cell ${props.value ? 'fade' : ''}`} onClick={props.onButtonClick}>
            {props.value === 'X' ? <IoMdClose color={'red'}/> : props.value ? <IoIosRadioButtonOff color={"blue"}/>: ''}
        </button>
    )
}