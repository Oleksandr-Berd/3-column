import { createPortal } from 'react-dom'; 

import * as SC from '../styles/columnStyled'

import { content } from "../utils/content";

import {ReactComponent as SedanMobLogo }from '../assets/icons/sedan_mob.svg'
import {ReactComponent as SuvsMobLogo} from '../assets/icons/suvs_mob.svg'
import {ReactComponent as LuxuryMobLogo} from '../assets/icons/luxury_mob.svg'

import { Column } from "../components/Column";
import PopUpComponent from '../components/PopUp';
import { useState } from 'react';


const SharedLayout: React.FC = () => {
    const [isPopUp, setIsPopUp] = useState(false)

const togglePopUp = () => {
    setIsPopUp(!isPopUp)
}

    const PopUp = () => {
        return createPortal(
         < PopUpComponent toggle={togglePopUp}/>,
          document.getElementById('popup') as HTMLElement
        );
      };


const {sedans, suvs, luxury} = content
  return (
    <SC.LayoutStyled>
        {isPopUp && <PopUp/>}
      <Column title={sedans.title} el={SedanMobLogo} text={sedans.text} toggle={togglePopUp}/>
      <Column title={suvs.title} el={SuvsMobLogo} text={suvs.text} toggle={togglePopUp}/>
      <Column title={luxury.title} el={LuxuryMobLogo} text={luxury.text} toggle={togglePopUp}/>
    </SC.LayoutStyled>
  );
};

export default SharedLayout;
