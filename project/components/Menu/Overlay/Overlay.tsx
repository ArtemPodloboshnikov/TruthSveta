import React from 'react';
import classes from './Overlay.module.scss';

type Props = {

    color: string
}

const Overlay: React.FC<Props> = ({color}) =>{
    
   console.log(classes[`wrap_${color}`] + ' menu')
    
    return (
    
        <div className={classes[`wrap_${color}`] + ' menu'}>
                
            <h1>Hello!</h1>
        </div>
    )
}

export default Overlay;