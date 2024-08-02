import styled from 'styled-components'

export const MainCon= styled.div`
padding-top: 48px;
padding-bottom: 48px;
padding-left: 48px;
padding-right: 48px;

background-color: #e28625;

border-radius: 8px;

& > *:not(:last-child){
    margin-bottom: 25px;
}

& > div:not(:first-child){
    padding-right: 40px;
}
`

export const IconCon = styled.div`
margin-bottom: 25px;
`

export const Title = styled.h2`
margin-bottom: 25px;

font-family: "BigSho";
font-size: 40px;
text-transform: uppercase;

color: #f2f2f2;
font-weight: bold;
`

export const Content = styled.p`


font-size: 15px;
font-family: "Lex";
line-height: 25px;

color: #fff;

opacity: 0.75;

`