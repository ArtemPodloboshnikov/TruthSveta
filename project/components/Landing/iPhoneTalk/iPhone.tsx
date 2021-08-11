import React from 'react';
import classes from './iPhone.module.scss';

type Props = {
  talk: string[],
  className: any,
  children: React.ReactNode
}

const IPhone: React.FC<Props> = ({ talk, className, children }) => (
  <div className={className} id='iPhone'>
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