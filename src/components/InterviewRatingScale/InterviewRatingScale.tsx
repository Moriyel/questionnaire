import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ButtonIconClose from '../ButtonIconClose/ButtonIconClose';
import style from './interviewratingscale.module.css'


function InterviewRatingScale () {
    const number = [1,2,3,4,5,6,7,8,9,10];
    return (
        <div className={style.wrapper}><ButtonIconClose/>
         <span className={style.textHeading}>Оцените продукт по 10-балльной шкале</span>
         <span className={style.textContent}>Какова вероятность, что вы порекомендуете сервис друзьям, коллегам, партнера?</span>            
         {number.map((i)=><ButtonComponent  typeStyle = 'number' to='/interviewComment' key={i}>{i}</ButtonComponent>)}
        </div>
    )
}

export default InterviewRatingScale;