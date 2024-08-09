import styled from "styled-components"

export const Box = styled.div`
position: fixed;
top: 0;
z-index: 1;
overflow: hidden;

width: 100%;
min-height: 100%;

text-align: center;

background-color: rgb(0, 0, 0, 0.83);
color: rgb(76, 175, 80);

font-family: "Lex";
line-height: 1.67;
font-style: italic;
font-weight: bold;
font-size: 24px;
`

export const Overlay = styled.div`
display: inline-block;

padding-top: 24px;
padding-right: 38px;
padding-bottom: 24px;
padding-left: 36px;

margin-top: 48px;

background-color: rgb(0, 0, 0);

border-radius: 16px;
`