import React from 'react';
import classes from './Uniqueness.module.scss';
import matchColors from '../../../constants/matchColors';
import Navicon from '../../Menu/Navicon/Navicon';

type Props = {

  className: string,
  title: string,
  text: {
    left: string;
    center: string[];
    right: string;
  },
  children: React.ReactNode
}

const Uniqueness: React.FC<Props> = ({children, title, text, className }) => {
  
  const original_color: string = className.split('_')[2];
  const contrast_color: string = matchColors[original_color];
 
  return (
  <div className={className + ' grid'} id='Uniqueness'> 
    <div className={classes[`content_${contrast_color}`]}>
      <h1>{title}</h1>
    </div>
    <div className={classes.overlay}>
      <div>
        <p dangerouslySetInnerHTML={{ __html: text.left }}>
        </p>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: text.center[0]}}>
        </p>
        <p dangerouslySetInnerHTML={{ __html: text.center[1]}}>
        </p>
      </div>
      <div>
        <p dangerouslySetInnerHTML={{ __html: text.right}}>
        </p>
      </div>
    </div>
    <img 
    className={classes.photo} 
    src={`/Landing/Svetlana_${contrast_color}.jpg`}
    />

    <img className={classes.arrow_1} src={`/images/arrow_${contrast_color}.png`}/>
    <img className={classes.arrow_2} src={`/images/arrow_${contrast_color}.png`}/>
    <img className={classes.arrow_3} src={`/images/arrow_${contrast_color}.png`}/>
    <img className={classes.arrow_4} src={`/images/arrow_${contrast_color}.png`}/>

    <div className={classes[`cta_${contrast_color}`]}>
      <p>Тогда хотя бы ...</p>
      <img src={`/images/arrow_${contrast_color}.png`}/>

    </div>
    {children}
  </div>
  )
}

export default Uniqueness;