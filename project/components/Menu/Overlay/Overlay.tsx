import React from 'react';
import classes from './Overlay.module.scss';

type Props = {

    color: string,
    close: boolean,
    setClose: any
}

const Overlay: React.FC<Props> = ({color, close, setClose}) =>{
    
   let current_class = (close)?  classes[`overlay_${color}`] : classes.overlay_none;
    
    return (
    
        <div className={[current_class, 'grid'].join(' ')}>
            <h1>Hello!</h1>
            <div className={classes.cross} onClick={()=>setClose(false)}></div>
        </div>
    )
}

export default Overlay;