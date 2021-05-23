import React from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ButtonIconClose from '../ButtonIconClose/ButtonIconClose';
import style from './interviewcomment.module.css'

const InterviewComment = ()=> {
    return (
        <div className={style.wrapper}>
          <ButtonIconClose/>     
          <span className = {style.textHeading}>Расскажите подробнее</span>
          <span className = {style.textContent}>Напишите пожалуйста почему вы дали такую оценку.
           Это поможет нам сделать сервис лучше. </span> 
          <span className={style.comment}>Комментарий</span>
          <textarea className={style.textarea} placeholder = {'Введите текст...'}/>
          <ButtonComponent to='/interviewEnd'> Отправить отзыв</ButtonComponent>
        </div>
    )
}

export default InterviewComment;