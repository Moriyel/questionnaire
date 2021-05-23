import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ButtonIconClose from '../ButtonIconClose/ButtonIconClose';
import  svgFrame  from './Frame.svg';
import style from './interviewtitlelist.module.css'


const InterviewTitleList = () => {
    
    return (
        <div className={style.wrapper}>
        <ButtonIconClose/>        
            <img className = {style.svgRadius} src={svgFrame}  alt="Frame" />
            <div className={style.content}>
             <div className={style.textTitle}>Помогите нам стать лучше</div>
             <span className={style.textDescription}>Поделитесь своими впечатлениями о работе в сервисе. Это займет меньше двух минут.</span>
             <ButtonComponent to = '/interviewRatingScale'>Пройти опрос</ButtonComponent>
            </div>
        </div>
    )
}

export default InterviewTitleList;