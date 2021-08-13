import React, { useState } from 'react';
import classes from './WhatWeDo.module.scss';
import matchColors from '../../../constants/matchColors';

type Props = {
  title: string,
  text: string[],
  list: string[],
  className: string,
  setHover: any,
  children: React.ReactNode
}

const WhatWeDo: React.FC<Props> = ({ title, text, list, children, className, setHover }) => {
  
  const original_color: string = className.split('_')[2];
  const contrast_color: string = matchColors[original_color];
  const original_path = `Svetlana_${original_color}.jpg`;
  const [src, setSrc] = useState(original_path);
  const paths: string[] = ["hand_loupe_turquoise.jpg", 
                          "camera_turquoise.jpg",
                          original_path,
                          "Svetlana_speak_turquoise.jpg",
                          "computer_turquoise.jpg"];
 
  return (
  <div className={className + ' grid'} id='WhatWeDo'>
    <div className={classes[`content_${contrast_color}`]}>
        <h1>{title}</h1>
        <br></br>
        <p>{text.map((paragraph: string)=>{ return <>{paragraph}<br></br><br></br></>})}</p>
        <ol>{list.map((point: string, index: number)=>{
          return <li 
                  onMouseEnter={()=>{setSrc(paths[index]); 
                               (index == 2)? setHover(true): ''}}
                  onMouseLeave={()=>{setSrc(original_path); setHover(false)}}
                  >
            <span className={classes.li}>{index + 1}</span><span>{point}</span>
            </li>})
          }
        </ol>
    </div>
    
    <img 
    className={classes.photo} 
    src={`/Landing/${src}`}
    />

    <div className={classes[`cta_${contrast_color}`]}>
      <p>Ну, нажми же! Уверена, у тебя есть, о чём поведать )</p>
      <img src={`/images/arrow_${contrast_color}.png`}/>

    </div>
    {children}
  </div>
  )
}

export default WhatWeDo;