import { useState } from 'react'
import * as SC from '../styles/columnStyled'


import { BtnLearnMore } from '../utils/BtnLearnMore'

interface IProps {
  title: string,
  text:string,
  el: React.ElementType,
  toggle: ()=> void
}

export const Column:React.FC <IProps>= (props) => {

const {title, text, el:Icon, toggle} = props

  return (
    <SC.MainCon title={title}>
    <SC.IconCon>
    <Icon/>
    </SC.IconCon>
    <SC.Title>{title}</SC.Title>
    <div>
    <SC.Content>{text}</SC.Content>
    </div>
    <BtnLearnMore title={title} toggle={toggle}/>
    </SC.MainCon>
  )
}
