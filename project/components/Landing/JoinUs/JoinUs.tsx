import React from 'react';
import classes from './JoinUs.module.scss';
import matchColors from '../../../constants/matchColors';
import Slider from '../../Slider/Slider';

type Props = {
  title: string,
  text: string,
  title2: string
  className: any,
  children: React.ReactNode
}

const JoinUs: React.FC<Props> = ({ title, title2, text, children, className }) => {
  
  const original_color: string = className.split('_')[2];
  const contrast_color: string = matchColors[original_color];
 
  return (
  <div className={className + ' grid'} id='JoinUs'>
    <div className={classes[`content_${contrast_color}`]}>
        <h1>{title}</h1>
        <br></br>
        <br></br>
        <p>{text}</p>
        <br></br>
        <br></br>
        <h1>{title2}</h1>
    </div>
    <Slider className={classes.slider} color={contrast_color}>
      <img src='/Landing/slide1'/>
      <img src='/Landing/slide2'/>
      <img src='/Landing/slide3'/>
    </Slider>
    <div className={classes[`cta_${contrast_color}`]}>
      <p>{`Ты знаешь, что делать ) Жду (^人^)`}</p>
      <img src={`/images/arrow_${contrast_color}.png`}/>

    </div>
    {children}
  </div>
  )
}

export default JoinUs;