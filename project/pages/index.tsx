import classes from './index.module.scss';
import IPhone from '../components/Landing/iPhoneTalk/iPhone';
import SimpleLayout from './layouts/SimpleLayout';
import WhoAreWe from '../components/Landing/AboutUs/WhoAreWe';
import LandingContent from './LandingContent.json';
import { Link } from 'react-scroll';

export default function Home() {

  enum colors {

    iPhone = 'brown',
    WhoAreWe = 'yellow' 
  }
  type LinksProps = {color: string}
  const Links: React.FC<LinksProps> = ({color}) =>
  {
   
    return (

      <div className={classes['links_' + color]}>
        <img src={`/Landing/loupe_${color}.svg`} className={classes.loupe} />
        <Link 
        className={classes.circle} 
        smooth={true} 
        duration={1000} 
        to={['AboutUs', 'iPhone'][+(color == 'yellow')]}/>
        <Link className={classes.circle} smooth={true} duration={1000} to='#'/>
        <Link className={classes.circle} smooth={true} duration={1000} to='#'/>
        <Link className={classes.circle} smooth={true} duration={1000} to='#'/>

      </div>
    )
  }
  return (
    <SimpleLayout description="ПравдаСвета - это некомерческий проект направленный на борьбу с пропогандой и повышение морального уровня граждан">
      <IPhone 
      talk={["Hey", "Ok!"]} 
      className={classes['wrap_' + colors.iPhone]}
      >
        <Links color={colors.iPhone}/>
      </IPhone>
      <WhoAreWe 
      title={LandingContent.WhoAreWe.title} 
      text={LandingContent.WhoAreWe.text}
      className={classes['wrap_' + colors.WhoAreWe]}
      >
        <Links color={colors.WhoAreWe}/>
      </WhoAreWe>
    </SimpleLayout>
  )
}
