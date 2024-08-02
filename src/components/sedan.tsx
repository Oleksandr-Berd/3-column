import * as SC from './sedanStyled'

import {ReactComponent as SedanMobLogo }from '../assets/icons/sedan_mob.svg'

import { BtnLearnMore } from '../utils/BtnLearnMore'

export const Sedan:React.FC = () => {
  return (
    <SC.MainCon>
    <div>
        <SedanMobLogo/>
    </div>
    <h2>sedans</h2>
    <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
    <BtnLearnMore/>
    </SC.MainCon>
  )
}
