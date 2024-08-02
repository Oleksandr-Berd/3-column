import * as SC from './sedanStyled'
import * as SB from './buttonLearnStyled'

import {ReactComponent as SedanMobLogo }from '../assets/icons/sedan_mob.svg'

import { BtnLearnMore } from '../utils/BtnLearnMore'

export const Sedan:React.FC = () => {
  return (
    <SC.MainCon>
    <SC.IconCon>
        <SedanMobLogo/>
    </SC.IconCon>
    <SC.Title>sedans</SC.Title>
    <div>
    <SC.Content>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</SC.Content>
    </div>
    <BtnLearnMore/>
    </SC.MainCon>
  )
}
