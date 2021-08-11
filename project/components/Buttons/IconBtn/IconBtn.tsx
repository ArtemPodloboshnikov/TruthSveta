import React from 'react';
import classes from './IconBtn.module.scss';
import Squircle from '../../Squircle/Squircle';

type Props = {

    type: React.ReactNode
}

const IconBtn: React.FC<Props> = ({type}) =>{
    
    let src: string = '';
    switch(type)
    {
        case 'datePicker':
            {
                src = '../../../public/icons/date.svg';
                break;
            }
        case 'home':
            {
                src = '../../../public/icons/home.svg';
                break;
            }
        case 'category':
            {
                src = '../../../public/icons/category.svg';
                break;
            }
        case 'vacancy':
            {
                src = '../../../public/icons/list.svg';
                break;
            }
        case 'author':
            {
                src = '../../../public/icons/man.svg';
                break;
            }
        case 'preview':
            {
                src = '/icons/eye.svg';
                break;
            }
        case 'publish':
            {
                src = '/icons/send.svg';
                break;
            }
        case 'login':
            {
                src = '/icons/door.svg';
                break;
            }
            case 'pallete':
                {
                    src = '/icons/pallete.svg';
                    break;
                }
            case 'edit':
                {
                    src = '/icons/feather.svg';
                    break;
                }
            case 'admin':
                {
                    src = '/icons/god.svg';
                }
            case 'block':
                {
                    src = '/icons/block.svg';
                    break;
                }
            case 'like':
                {
                    src = '/icons/heart.svg';
                    break;
                }
            case 'comment':
                {
                    src = '/icons/comment.svg';
                    break;
                }
    }
    return (
    
        <div className={classes.wrap_brown}>
            <Squircle className={classes.wrap}>
                <object type="image/svg+xml" data={src}/>
            </Squircle>
        </div>
    )
}

export default IconBtn;