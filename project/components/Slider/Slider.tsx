import React, { useState } from 'react';
import classes from './Slider.module.scss';
type Props = {
    
    color: string,
    className?: string,
    children: React.ReactNode
}

const ButtonTruth: React.FC<Props> = ({color, className, children}) =>{
    
    const [click, setClick] = useState(false);
  
    return (
        <div className={[classes[`wrap_${color}`], className].join(' ')}>
            <div className={classes.slide}>{children}</div>
            <div className={classes.controllers}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default ButtonTruth;