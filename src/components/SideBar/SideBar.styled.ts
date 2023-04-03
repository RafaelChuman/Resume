import { theme } from "@/App.styled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: baseline;
  padding-left: ${theme.space["3.125rem"]};
  padding-top: ${theme.space["5rem"]};
  
  background-color: ${theme.colors.gray[300]};
  
  min-width: ${theme.width["350px"]};

  p,a {
    display: flex;
    align-items: left;
    word-wrap: break-word;

    
    font-size: ${theme.fontSizes["1.5rem"]};
    
    
  }


  .ProfileImage{
    height: ${theme.width["250px"]};
    width: ${theme.width["250px"]};
    border: 3px solid ${theme.colors.green[400]};
  }

  .InfoGroup{

    display: flex;
    flex-direction: column;
    align-items: left;

    padding-top: ${theme.space["4rem"]};
  }

  .Info{

    display: flex;
    flex-direction: column;
    align-items: left;

    padding-top: ${theme.space["1.25rem"]};
    color: ${theme.colors.green[400]};
  }



  .InfoTitle{
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.cyan[300]};
  }

  .Line{

    display: flex;
    flex-direction: column;
    align-items: left;

    margin-top: ${theme.space["0.125rem"]};
    
    background-color: ${theme.colors.gray[600]};

    height: ${theme.lineHeights["0.500rem"]};

    margin-bottom:${theme.space["2rem"]};
    
  }

  }
  .SkillsGroup{

    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    justify-content:center;
    
    img{
      padding: ${theme.space["0.125rem"]};
    }
    
  

`;
