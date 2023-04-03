import styled from "styled-components";
import { theme } from "@/App.styled";

export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: top;
    

    padding-left: ${theme.space["3.125rem"]};
    padding-top: ${theme.space["5rem"]};
    padding-right: ${theme.space["5rem"]};
    padding-bottom: ${theme.space["5rem"]};
    
    background-color: ${theme.colors.gray[600]};

    p{
        
        line-height:${theme.lineHeights["2rem"]};
        font-size: ${theme.fontSizes["1.125rem"]};
        text-align: justify;
        

        
    }


    .Title{
        
        line-height:${theme.lineHeights["2rem"]};
        font-size: ${theme.fontSizes["1.5rem"]};
        color: ${theme.colors.cyan[300]};

        padding-top: ${theme.space["1.5rem"]};

        font-weight: ${theme.fontWeights.bold};

        
    }
    
    .Line{
        background-color: ${theme.colors.orange[400]};
        height:${theme.lineHeights["0.125rem"]};
        width: 100%;
    }

    .Content{
        text-indent: ${theme.space["2rem"]};
    }
    
    .Date{
        padding-top: ${theme.space["2.5rem"]};
    }

    .Date, .Name{
        font-weight: ${theme.fontWeights.bold};

    }
 
`;
