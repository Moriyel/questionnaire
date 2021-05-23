import React from 'react';
import ButtonIconClose from '../ButtonIconClose/ButtonIconClose';
import style from './interviewend.module.css';



function InterviewEnd () {
    return (
        <div className = {style.wrapperEnd}>
         <ButtonIconClose />     
         <span className = {style.textHeading}>Спасибо!</span>
         <span className = {style.textContent}>Мы изучим все отзывы и учтём их в дальнейшей работе.</span> 
        </div>
    )
}

export default InterviewEnd;