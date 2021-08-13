import React, { useState } from 'react';
import classes from './Navicon.module.scss';
import Overlay from '../Overlay/Overlay';

type Props = {
   
    color: string
}

const Navicon: React.FC<Props> = ({color}) =>{
    
   const [click, setClick] = useState(false);
    
    return (
        <>
        <Overlay color={color} close={click} setClose={setClick}/>
        <div className={classes.navicon} onClick={()=>setClick(true)}>
                <div className={classes.stick}></div>
                <div className={classes.stick}></div>
                <div className={classes.stick}></div>
        </div>
        </>
    )
}

export default Navicon;