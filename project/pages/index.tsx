import classes from './index.module.scss';
import IPhone from '../components/Landing/iPhoneTalk/iPhone';
import SimpleLayout from './layouts/SimpleLayout';
import WhoAreWe from '../components/Landing/AboutUs/WhoAreWe';
import WhatWeDo from '../components/Landing/WhatWeDo/WhatWeDo';
import Uniqueness from '../components/Landing/Uniqueness/Uniqueness';
import LandingContent from './LandingContent.json';
import { Link } from 'react-scroll';
import React, {useEffect, useState} from 'react';
import LandingColors from '../constants/LandingColors';
import matchColors from '../constants/matchColors';
import Networks from '../components/Networks/Networks';
import ButtonTruth from '../components/Buttons/ButtonTruth/ButtonTruth';
import Navicon from '../components/Menu/Navicon/Navicon';
import JoinUs from '../components/Landing/JoinUs/JoinUs';

export default function Home() {

  const [scroll, setScroll] = useState(0);
  const [hoverButtonTruth, setHoverButtonTruth] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  type SideBarProps = {color: string}
  const SideBar: React.FC<SideBarProps> = ({color}) =>
  {
    const contrast_color = matchColors[color];
  
    return (
      <>
        <Navicon color={color}/> 
        <Networks color={contrast_color} className={classes.networks}/>
        <ButtonTruth 
        hover={hoverButtonTruth} 
        className={classes.buttonTruth} 
        color={contrast_color}
        />
        <div className={classes['links_' + color]}>
          <img src={`/Landing/loupe_${color}.svg`} className={classes.loupe} />
          <Link 
          className={classes.circle} 
          smooth={true} 
          duration={1000} 
          to={['AboutUs', 'iPhone'][+(color == LandingColors.WhoAreWe)]}
          />
          <Link 
          className={classes.circle} 
          smooth={true} 
          duration={1000} 
          to={['WhatWeDo', 'iPhone'][+(color == LandingColors.WhatWeDo)]}
          />
          <Link 
          className={classes.circle} 
          smooth={true} 
          duration={1000} 
          to={['Uniqueness', 'iPhone'][+(color == LandingColors.Uniqueness)]}
          />
          <Link 
          className={classes.circle} 
          smooth={true} 
          duration={1000} 
          to={['JoinUs', 'iPhone'][+(color == LandingColors.JoinUs)]}
          />

        </div>
      </>
    )
  }
  // console.log(LandingColors.WhatWeDo)
  return (
    <SimpleLayout description="ПравдаСвета - это некомерческий проект направленный на борьбу с пропогандой и повышение морального уровня граждан">
      <IPhone 
      talk={["Hey", "Ok!"]} 
      className={classes['wrap_' + LandingColors.iPhone]}
      color={LandingColors.iPhone}
      >
        <SideBar color={LandingColors.iPhone}/>
      </IPhone>
      <WhoAreWe 
      title={LandingContent.WhoAreWe.title} 
      text={LandingContent.WhoAreWe.text}
      className={classes['wrap_' + LandingColors.WhoAreWe]}
      scrollReach={(scroll < 600)}
      >
        <SideBar color={LandingColors.WhoAreWe}/>
      </WhoAreWe>
      <WhatWeDo
      title={LandingContent.WhatWeDo.title} 
      text={LandingContent.WhatWeDo.text}
      list={LandingContent.WhatWeDo.list}
      className={classes['wrap_' + LandingColors.WhatWeDo]}
      setHover={setHoverButtonTruth}
      >
        <SideBar color={LandingColors.WhatWeDo}/>
      </WhatWeDo>
      <Uniqueness
      title={LandingContent.Uniqueness.title}
      text={LandingContent.Uniqueness.text}
      className={classes['wrap_' + LandingColors.Uniqueness]}
      >
        <SideBar color={LandingColors.Uniqueness}/>
      </Uniqueness>
      <JoinUs
      title={LandingContent.JoinUs.title}
      title2={LandingContent.JoinUs.title2}
      text={LandingContent.JoinUs.text}
      className={classes['wrap_' + LandingColors.JoinUs]}
      >
         <SideBar color={LandingColors.JoinUs}/>
      </JoinUs>
    </SimpleLayout>
  )
}
