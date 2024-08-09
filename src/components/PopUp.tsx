import { useEffect } from "react";
import * as SC from "../styles/popUpStyled"

interface IProps {
    toggle:()=> void;
}

const PopUpComponent:React.FC<IProps> = ({toggle}) => {


    useEffect(()=> {
        const closePopUp = () => {
            setTimeout(toggle, 5000)
        }
        closePopUp()
    }, [toggle])



    return ( <SC.Box onClick={toggle}>
        <SC.Overlay> 
            You've learned it. <pre/> My Congrats!
        </SC.Overlay>
    </SC.Box> );
}
 
export default PopUpComponent