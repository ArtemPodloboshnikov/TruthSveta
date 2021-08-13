import React, {useState} from 'react';
import classes from './IconBtn.module.scss';
import Squircle from '../../Squircle/Squircle';
import DialogWindow from '../../DialogsWindows/DialogWindow';

type Props = {

    type: React.ReactNode,
    squircle?: boolean,
    onClick?: any,
    color: string
}

const IconBtn: React.FC<Props> = ({type, color, onClick, squircle = true}) =>{
    
    
    let src: string = '';
    switch(type)
    {
        case 'datePicker':
            {
                src = `/icons/date_${color}.svg`;
                break;
            }
        case 'home':
            {
                src = `/icons/home_${color}.svg`;
                break;
            }
        case 'category':
            {
                src = `/icons/category_${color}.svg`;
                break;
            }
        case 'vacancy':
            {
                src = `/icons/list_${color}.svg`;
                break;
            }
        case 'author':
            {
                src = `/icons/man_${color}.svg`;
                break;
            }
        case 'preview':
            {
                src = `/icons/eye_${color}.svg`;
                break;
            }
        case 'publish':
            {
                src = `/icons/send_${color}.svg`;
                break;
            }
        case 'login':
            {
                src = `/icons/door_${color}.svg`;
                break;
            }
        case 'pallete':
            {
                src = `/icons/pallete_${color}.svg`;
                break;
            }
        case 'edit':
            {
                src = `/icons/feather_${color}.svg`;
                break;
            }
        case 'admin':
            {
                src = `/icons/god_${color}.svg`;
            }
        case 'block':
            {
                src = `/icons/block_${color}.svg`;
                break;
            }
        case 'like':
            {
                src = `/icons/heart_${color}.svg`;
                break;
            }
        case 'comment':
            {
                src = `/icons/comment_${color}.svg`;
                break;
            }
        case 'vk':
        {
            src = `/icons/vk_${color}.svg`;
            break;
        }case 'instagram':
        {
            src = `/icons/instagram_${color}.svg`;
            break;
        }
        case 'email':
            {
                src = `/icons/email_${color}.svg`;
              
                break;
            }
    }
 
    return (
     
        <div className={classes[`wrap_${color}`]}>
            {[<img src={src} onClick={()=>onClick()}/>,
            <Squircle className={classes.squircle}>
                <object type="image/svg+xml" data={src}/>
            </Squircle>][+(squircle)]}
        </div>
       
    )
}

export default IconBtn;