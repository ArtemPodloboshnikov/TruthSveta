import React, { useState } from 'react';
import classes from './ButtonTruth.module.scss';
import DialogWindow from '../../DialogsWindows/DialogWindow';
type Props = {
    
    color: string
}

const ButtonTruth: React.FC<Props> = ({color}) =>{
    
    const [click, setClick] = useState(false);
    
    return (
        <>
            <DialogWindow 
            color={color}
            close={click}
            setClose={setClick}>
                <h1>В ВК или по почте</h1>
            </DialogWindow>
            <div className={classes[`buttonTruth_${color}`]} onClick={()=>setClick(true)}>
            </div>
        </>
    )
}

export default ButtonTruth;