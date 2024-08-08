import * as SC from '../styles/columnStyled'


import { BtnLearnMore } from '../utils/BtnLearnMore'

interface IProps {
  title: string,
  text:string,
  el: React.ElementType
}

export const Column:React.FC <IProps>= ({title, text,el:Icon}) => {


  return (
    <SC.MainCon title={title}>
    <SC.IconCon>
    <Icon/>
    </SC.IconCon>
    <SC.Title>{title}</SC.Title>
    <div>
    <SC.Content>{text}</SC.Content>
    </div>
    <BtnLearnMore/>
    </SC.MainCon>
  )
}
