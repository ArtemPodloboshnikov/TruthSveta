import React, { useState } from 'react';
import classes from './Slider.module.scss';
import Link from 'next/link';

type Props = {
    
    color: string,
    text: string[],
    className?: string,
    linksHref?: string[],
    children: React.ReactNode
}

const ButtonTruth: React.FC<Props> = ({text, color, linksHref = [], className, children}) =>{
    
    const count_controllers: number = React.Children.count(children);
    

    function generateControllers(clicks: boolean[], setClicks: any): React.ReactNode
    {
        let controllers: React.ReactNode[] = [];
        
        for (let i = 0; i < clicks.length; i++)
        {
            controllers.push(<div onClick={()=>{
                let clean_clicks: boolean[] = clicks.map(()=>{return false});
                clean_clicks[i] = true;
                console.log(clean_clicks)
                setClicks(clean_clicks);
                }
            } className={[classes.action, ''][+(!clicks[i])]}></div>)
        }

        return controllers;

    }


    let clicks_array: boolean[] = new Array(count_controllers);
    for (let i = 0; i < clicks_array.length; i++)
        clicks_array[i] = false;
    clicks_array[0] = true;
    const [clicks, setClicks] = useState(clicks_array);
    children = React.Children.map(children, (child, index)=>{ 
        return <div 
                style={(clicks[index])? {gridRow: '1 / 1'}:{}}
                >
                    {(!linksHref.length)?child: 
                    <Link passHref={true} href={(linksHref[index] !== undefined)?linksHref[index]: linksHref[0]}>
                        <a>Перейти &#9754;</a>
                    </Link>}
                    <p>{text[index]}</p>
                    {child}
                </div>
    });
    return (
        <div className={[classes[`wrap_${color}`], className].join(' ')}>
            <div className={classes.slide}>{children}</div>
            <div className={classes.controllers}>
                {generateControllers(clicks, setClicks)}
            </div>
        </div>
    )
}

export default ButtonTruth;