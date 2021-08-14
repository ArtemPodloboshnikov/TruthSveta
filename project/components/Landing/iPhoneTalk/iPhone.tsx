import React, {useState} from 'react';
import classes from './iPhone.module.scss';
import Links from '../../../constants/Links';

type Props = {
  talk: string[],
  className: string,
  children: React.ReactNode,
  color: string
}

const IPhone: React.FC<Props> = ({ talk, className, children, color }) => {

  const [src, setSrc] = useState('/Landing/buttonTruth.svg');

  return (
  <div className={className + ' grid'} id='iPhone'>
    <div className={classes.overlay}></div>
    <div className={classes.phone}>
      <div className={classes.header}>
        <img className={classes.arrow} src='/Landing/arrow_back.svg'/>
        <img src='/Landing/friend.png' className={classes.photo}/>
        <p className={classes.name}>Софья Надеждовна</p>
        <sub className={classes.sub}>online</sub>
        <img src='/Landing/three_points.svg' className={classes.points}/>
      </div>
      <div className={classes.content}>
        <div className={classes.alien}>
          <p><span>Правда Света!</span> Ты разоблачала подлецов? Помогала людям рассказать их историю!? Формировала критическое мышление у гражан!!?😵😇</p>
          <sub>09:17</sub>
        </div>
        <div className={classes.my} style={{height: `18vh`, top: `50%`}}>
        <p>Знаешь, я делала это не в одиночку! У меня была команда профессиональных блогеров. Вместе мы вели расследования, делали видео и презинтации для людей. Чтобы лжи в мире стало меньше! А жулики получили по заслугам😎⚔</p>
        <sub>09:17</sub>
        </div>
        <div className={classes.alien} style={{width: `18vw`, top: `343%`, right: `27%`}}>
          <p>А можно я тоже присоединюсь к вашей команде! Всегда хотела стать гардемарином🤠</p>
          <sub>09:17</sub>
        </div>
        <div className={classes.my} style={{height: `16vh`, top: `325%`}}>
        <p>С нами — ты Джессикой Джонс станешь! Напиши о себе и своих навыках на нашем сайте. <a href='https://vk.com/pravdasveta'>«Амбассадорам правды»⁣⁣⁣⁣⁣⁣</a> нужны новобранцы. Мы сделаем нашу страну лучше! Вместе!!!💪🏻</p>
        <sub>09:17</sub>
        </div>
      </div>
      <div className={classes.message}>
        <img className={classes.smile} src="/Landing/smile.svg"/>
        <p>Расскажи свою историю!</p>
        <img className={classes.send} src="/Landing/send.svg"/>
      </div>
    </div>
    <img className={classes.arrow_truth} src='/images/arrow_crimson.png' />
    <div className={classes.buttonTruth}>
      <a href={Links.vk}>
        <img 
        onMouseEnter={()=>setSrc('/Landing/buttonTruth_active.svg')} 
        onMouseLeave={()=>setSrc('/Landing/buttonTruth.svg')}
        src={src}
        />
      </a>
    </div>

    {children}
    
  </div>
  )
}

export default IPhone;