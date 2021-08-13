import React, { useState } from 'react';
import classes from './ButtonTruth.module.scss';
import DialogWindow from '../../DialogsWindows/DialogWindow';
type Props = {
    
    color: string,
    className?: string,
    hover?: boolean
}

const ButtonTruth: React.FC<Props> = ({color, hover, className}) =>{
    
    const [click, setClick] = useState(false);
    let hover_class = (hover)? classes[`hover_${color}`] : '';
    return (
        <>
            <DialogWindow 
            color={color}
            close={click}
            setClose={setClick}>
                <h1>В ВК или по почте</h1>
            </DialogWindow>
            <div 
            className={[classes[`buttonTruth_${color}`], className, hover_class].join(' ')} 
            onClick={()=>setClick(true)}
            >
            </div>
        </>
    )
}

export default ButtonTruth;