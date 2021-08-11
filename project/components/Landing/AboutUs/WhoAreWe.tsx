import React from 'react';
import { Link } from 'react-scroll';
import classes from './WhoAreWe.module.scss';
import IconBtn from '../../Buttons/IconBtn/IconBtn';

type Props = {
  title: string,
  text: string[],
  className: any,
  children: React.ReactNode
}

const WhoAreWe: React.FC<Props> = ({ title, text, children, className }) => (
  <div className={className} id='AboutUs'>
    <div className={classes.content}>
        <h1>{title}</h1>
        <br></br>
        <p>{text.map((paragraph: string)=>{ return <>{paragraph}<br></br><br></br></>})}</p>
    </div>
    <img className={classes.photo} src='/Landing/Svetlana_yellow.png'/>
    <div className={classes.buttonTruth}>
      <object className={classes.buttonTruth} type="image/svg+xml" data="/logo.svg">
        
      </object>
    </div>
    {children}
  </div>
)

export default WhoAreWe;