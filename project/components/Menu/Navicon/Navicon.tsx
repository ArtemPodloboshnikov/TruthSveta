import React from 'react';
import classes from './Navicon.module.scss';
import Overlay from '../Overlay/Overlay';

type Props = {
   
    color: string
}

const Navicon: React.FC<Props> = ({color}) =>{
    
   
    
    return (
        <>
        <Overlay color={color}/>
        <div className={classes.navicon}>
                <div className={classes.stick}></div>
                <div className={classes.stick}></div>
                <div className={classes.stick}></div>
        </div>
        </>
    )
}

export default Navicon;