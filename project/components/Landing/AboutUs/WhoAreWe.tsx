import React from 'react';
import classes from './WhoAreWe.module.scss';
import Link from 'next/link';
import matchColors from '../matchColors';
import Navicon from '../../Menu/Navicon/Navicon';
import ButtonTruth from '../../Buttons/ButtonTruth/ButtonTruth';
import Networks from '../../Networks/Networks';

type Props = {
  title: string,
  text: string[],
  className: any,
  scrollReach: boolean,
  children: React.ReactNode
}

const WhoAreWe: React.FC<Props> = ({ title, text, children, className, scrollReach }) => {
  
  const original_color: string = className.split('_')[2];
  const contrast_color: string = matchColors[original_color];
 
  return (
  <div className={className} id='AboutUs'>
    <Navicon color={original_color}/>
    <div className={classes[`content_${contrast_color}`]}>
        <h1>{title}</h1>
        <br></br>
        <p>{text.map((paragraph: string)=>{ return <>{paragraph}<br></br><br></br></>})}</p>
    </div>
    
    <img 
    className={classes.photo + ' ' + [classes.photo_shadow, ''][+(scrollReach)]} 
    src={`/Landing/Svetlana_${original_color}.jpg`}
    />
    <img className={[classes.scoundrels, classes.Nilson, [classes.Nilson_show, ''][+(scrollReach)]].join(' ')} src='/Landing/Nilson.png'/>
    <img className={[classes.scoundrels, classes.Jons, [classes.Jons_show, ''][+(scrollReach)]].join(' ')} src='/Landing/Jons.png'/>

    <div className={classes[`cta_${contrast_color}`]}>
      <p>Нажми на кнопку! Расскажи свою историю!!!</p>
      <img src='/images/arrow_crimson.png'/>

    </div>
    <Networks color={contrast_color} className={classes.networks}/>
    <ButtonTruth color={contrast_color}/>
    {children}
  </div>
  )
}

export default WhoAreWe;