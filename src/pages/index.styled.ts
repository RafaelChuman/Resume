import styled from "styled-components";
import { theme } from "@/App.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;

  margin-left: ${theme.space["2rem"]};
  margin-top: ${theme.space["2rem"]};
  margin-right: 0px;


  p {
    padding: ${theme.space["1rem"]};
    line-height: ${theme.lineHeights["2rem"]};
    font-size: ${theme.fontSizes["1rem"]};
    text-align: justify;
  }

  .Title {
    line-height: ${theme.lineHeights["2rem"]};
    font-size: ${theme.fontSizes["1.5rem"]};
    color: ${theme.colors.cyan["300"]};

    padding-top: ${theme.space["1.5rem"]};

    font-weight: ${theme.fontWeights.bold};
  }



  .Content {
    text-indent: ${theme.space["2rem"]};
    padding-bottom: 0px;
  }

  .Date {
    padding-top: ${theme.space["2.5rem"]};
    padding-bottom: 0px;
  }

  .Date {
    font-weight: ${theme.fontWeights.bold};
  }

  .ContentGroup {
    background-color: ${theme.colors.white};
    border-radius: ${theme.space["0.25rem"]};
    box-shadow: 0px 0px 0px 1px ${theme.colors.borderColor};
    margin-bottom: ${theme.space["2rem"]};
  }
`;
