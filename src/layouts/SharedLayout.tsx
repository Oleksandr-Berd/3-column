import { createPortal } from 'react-dom'; 

import * as SC from '../styles/appStyled'

import { content } from "../utils/content";

import {ReactComponent as SedanMobLogo }from '../assets/icons/sedan_mob.svg'
import {ReactComponent as SuvsMobLogo} from '../assets/icons/suvs_mob.svg'
import {ReactComponent as LuxuryMobLogo} from '../assets/icons/luxury_mob.svg'

import { Column } from "../components/Column";
import PopUpComponent from '../components/PopUp';
import { useToggle } from '../hooks/useToggle';

const SharedLayout: React.FC = () => {

const {openPopUp, closePopUp, isPopUp} = useToggle()

    const PopUp: React.FC = () => {
        return createPortal(
         < PopUpComponent toggle={closePopUp}/>,
          document.getElementById('popup') as HTMLElement
        );
      };


const {sedans, suvs, luxury} = content
  return (
    <SC.LayoutStyled>
        {isPopUp && <PopUp/>}
      <Column title={sedans.title} el={SedanMobLogo} text={sedans.text} toggle={openPopUp}/>
      <Column title={suvs.title} el={SuvsMobLogo} text={suvs.text} toggle={openPopUp}/>
      <Column title={luxury.title} el={LuxuryMobLogo} text={luxury.text} toggle={openPopUp}/>
    </SC.LayoutStyled>
  );
};

export default SharedLayout;
