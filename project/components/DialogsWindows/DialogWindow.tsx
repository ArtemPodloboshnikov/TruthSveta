import React from 'react';
import classes from './DialogWindow.module.scss';
type Props = {
    
    color: string,
    setClose: any,
    close: boolean,
    children: React.ReactNode
}

const DialogWindow: React.FC<Props> = ({color, close, setClose, children}) =>{
    
    return (
        <>
            <div className={(close)?classes[`overlay_${color}`]: classes.overlay_none}>
                <div className={classes.content}>
                    <div className={classes.cross} onClick={()=>setClose(false)}></div>
                    {children}
                </div>
            </div>
            
        </>
    )
}

export default DialogWindow;