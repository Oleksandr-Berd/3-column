import styled from "styled-components";

export const BtnLearnMore = styled.button`
  padding-top: 11px;
  padding-right: 31px;
  padding-bottom: 12px;
  padding-left: 31px;

  background-color: ${({ theme }) => theme.color.title};
  color: ${({ title, theme }) => {
    switch (title) {
      case "sedans":
        return theme.color.sedans;
      case "suvs":
        return theme.color.suvs;
      case "luxury":
        return theme.color.luxury;
      default:
        return;
    }
  }};

  font-family: "Lex";
  line-height: 1.67;
  font-size: 15px;

  border: none;
  border-radius: 25px;

  @media (min-width: 1280px) {
    &:hover,
    &:focus {
      background-color: ${({ title, theme }) => {
        switch (title) {
          case "sedans":
            return theme.color.sedans;
          case "suvs":
            return theme.color.suvs;
          case "luxury":
            return theme.color.luxury;
          default:
            return;
        }
      }};
      color: ${({ theme }) => theme.color.text};
    }

    border: 1px solid ${({ theme }) => theme.color.text};
    transition: background-color 300ms linear, color 300ms linear;
  }

  transition: background-color 300ms linear, color 300ms linear;
`;
