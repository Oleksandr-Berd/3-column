import styled from "styled-components"

export const BtnLearnMore = styled.button`
padding-top: 11px;
padding-right: 31px;
padding-bottom: 12px;
padding-left: 11px;

background-color: ${({theme}) => theme.color.title};
color: ${({title, theme})=> {
     switch (title){
        case "sedans":
           return theme.color.sedans
            case "suvs":
            return    theme.color.suvs
            case "luxury":
                return theme.color.luxury
                default:
                return
          }
        
}};

font-family: "Lex";
line-height: 1.67;
font-size: 15px;

border-radius: 25px;
`