import styled from "styled-components";

export const LayoutStyled = styled.div`
  & > div:first-child {
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > div:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  & button {
    padding-top: 11px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;

    background-color: #f2f2f2;

    border-radius: 25px;
    border: none;
  }
`;

export const MainCon = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;

  background-color: ${({ theme, title }) => {

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

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }

  & > div:not(:first-child) {
    padding-right: 40px;
  }
`;

export const IconCon = styled.div`
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  margin-bottom: 25px;

  font-family: "BigSho";
  font-size: 40px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.title};
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 15px;
  font-family: "Lex";
  line-height: 25px;

  color: ${({ theme }) => theme.color.text};

  opacity: 0.75;
`;
