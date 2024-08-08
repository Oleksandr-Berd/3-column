import * as SC from '../styles/columnStyled'

import { content } from "../utils/content";

import {ReactComponent as SedanMobLogo }from '../assets/icons/sedan_mob.svg'
import {ReactComponent as SuvsMobLogo} from '../assets/icons/suvs_mob.svg'
import {ReactComponent as LuxuryMobLogo} from '../assets/icons/luxury_mob.svg'

import { Column } from "../components/Column";


const SharedLayout: React.FC = () => {


 
const {sedans, suvs, luxury} = content
  return (
    <SC.LayoutStyled>
      <Column title={sedans.title} el={SedanMobLogo} text={sedans.text}/>
      <Column title={suvs.title} el={SuvsMobLogo} text={suvs.text}/>
      <Column title={luxury.title} el={LuxuryMobLogo} text={luxury.text}/>
    </SC.LayoutStyled>
  );
};

export default SharedLayout;
