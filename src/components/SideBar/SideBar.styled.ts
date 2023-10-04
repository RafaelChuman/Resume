import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  --profileImageHeight: ${theme.width["250px"]};
  --profileImageWidth: ${theme.width["250px"]};
  --profileImageMargin: calc(${theme.width["250px"]} * -0.5); 


  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: baseline;
  padding-left: ${theme.space["3.125rem"]};

  min-width: ${theme.width["350px"]};

  background-color: ${theme.colors.white};
  border-radius: ${theme.space["0.25rem"]};
  box-shadow: 0px 0px 0px 1px ${theme.colors.borderColor};
  margin-bottom: ${theme.space["2rem"]};
  margin-top: ${theme.space["2rem"]};

  p,
  a {
    display: flex;
    align-items: left;
    word-wrap: break-word;

    font-size: ${theme.fontSizes["1rem"]};
  }

  .ProfileImageContainer{
    
    height: calc(var(--profileImageHeight) + var(--profileImageMargin));

    .ProfileImage {
      height: var(--profileImageHeight);;
      width: var(--profileImageWidth);;
      border-radius: ${theme.space["20rem"]};
      border: 3px solid ${theme.colors.white};
      margin: var(--profileImageMargin) 0px;
    }
  }


  .InfoGroup {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: ${theme.space["3.125rem"]};
  }

  .Info {
    display: flex;
    flex-direction: column;
    align-items: left;

    padding-top: ${theme.space["1.25rem"]};
    color: ${theme.colors.black};
  }

  .InfoTitle {
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.cyan[300]};
  }

  .SkillsGroup {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;

    img {
      padding: ${theme.space["0.125rem"]};
    }
  }
`;
