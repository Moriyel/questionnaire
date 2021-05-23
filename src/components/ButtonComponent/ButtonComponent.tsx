import React, { useState} from 'react';
import style from './buttoncomponent.module.css';
import { Redirect } from 'react-router';
import cn from "classnames";

interface IButtonComponentProps  {
    typeStyle?: 'string' | 'number',
    to: string,
    className?: {} | string
    children?: any
}

const ButtonComponent:React.FC<IButtonComponentProps> = (props) => {
   const {children, className, typeStyle = 'string', to }= props
   const [state, setState]= useState(false)
   const classes = cn({
       [style.radioButton]: typeStyle === 'number',
       [style.colorOrange]: children < 7 && typeStyle === 'number',
       [style.colorBlue]: children >= 7 && typeStyle === 'number',
       [style.colorSize]: typeStyle === 'string'}, className)
  
    return (
        <>
        { state && <Redirect push to={to}/> }
        <button  className = {classes}  onClick= {()=> setState(true)}>{children}</button>
        </>
    )
}

export default ButtonComponent;

