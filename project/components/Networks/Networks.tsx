import React, {useState} from 'react';
import classes from './Networks.module.scss';
import IconBtn from '../Buttons/IconBtn/IconBtn';
import DialogWindow from '../DialogsWindows/DialogWindow';
import copyToClipboard from '../../functions/copyToClipboard';
import Links from '../../constants/Links';

type Props = {

    color: string,
    className: string
}

const Networks: React.FC<Props> = ({color, className}) =>{
    
    const [click, setClick] = useState(false);
    
    return (
        <>
        <DialogWindow
        color={color}
        close={click}
        setClose={setClick}
        >
            <h1>Почта скопирована!</h1>
        </DialogWindow>
        <div className={[classes.networks, className].join(' ')}>
            <IconBtn type='vk' squircle={false} color={color}/>
            <IconBtn type='instagram' squircle={false} color={color}/>
            <IconBtn 
            onClick={()=>{setClick(true); copyToClipboard(Links.email)}} 
            type='email' 
            squircle={false} 
            color={color}/>
        </div>
        </>
    )
}

export default Networks;