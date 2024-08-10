import styled from "styled-components";

export const LayoutStyled = styled.div`
  position: relative;

  max-width: 1280px;
  height: 100vh;
  @media (min-width: 1280px) {
    display: flex;

    margin-left: auto;
    margin-right: auto;
  }

  & > div:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    @media (min-width: 1280px) {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-top-right-radius: 0px;
    }
  }

  & > div:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (min-width: 1280px) {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 0px;
    }
  }
`;

export const MainCon = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;

  background-color: ${({ theme, title }) => {
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

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContentCon = styled.div`
  padding-right: 42px;

  margin-bottom: 25px;
`;

export const IconCon = styled.div`
  margin-bottom: 35px;

  @media (min-width: 1280px) {
    margin-bottom: 35px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 25px;

  font-family: "BigSho";
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.title};
  font-weight: bold;
`;

export const Content = styled.p`
  font-size: 15px;
  font-family: "Lex";
  line-height: 1.67;

  color: ${({ theme }) => theme.color.text};

  opacity: 0.75;
`;
