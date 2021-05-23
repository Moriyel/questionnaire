import React from 'react';
import svgVector from './Vector.svg';
import style from "./buttoniconclose.module.css"

const ButtonIconClose = () => {
    return (
        <div onClick= {()=> alert('Благодарим за проявленный интерес')} className={style.iconLocation}>
            <img src={svgVector}  alt="Vector"  />   
        </div>
        
    )
}

export default ButtonIconClose;