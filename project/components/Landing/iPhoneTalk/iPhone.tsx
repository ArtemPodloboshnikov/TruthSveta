import React from 'react';
import classes from './iPhone.module.scss';

type Props = {
  talk: string[],
  className: string,
  children: React.ReactNode,
  color: string
}

const IPhone: React.FC<Props> = ({ talk, className, children, color }) => (
  <div className={className + ' grid'} id='iPhone'>
    <img className={classes.phone} src="/Landing/iPhone.png"/>
    <div className={classes.buttonTruth}>
      <object type="image/svg+xml" data="/logo.svg">
        {/* <img src="/logo.svg" alt="Фолбэк"/> */}
      </object>
    </div>

    {children}
    
  </div>
)

export default IPhone;