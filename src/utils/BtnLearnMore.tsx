import * as SC from '../styles/btnStyle'

interface IProps {
  title:string,
  toggle: ()=> void
}


export const BtnLearnMore:React.FC<IProps> = ({title, toggle}) => {

  const content:string = "Learn More"

  return (
    <div>
        <SC.BtnLearnMore type='button' title={title} onClick={toggle}>{content}</SC.BtnLearnMore>
    </div>
  )
}
