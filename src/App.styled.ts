import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#FFFFFF",
    gray: {
      // 900: "#171923",
      // 800: "#1A202C",
      // 700: "#1E1E1E",
      600: "#1E1E1E",
      // 500: "#718096",
      // 400: "#A0AEC0",
      300: "#303031",
      // 200: "#E2E8F0",
      // 100: "#EDF2F7",
      // 50: "#F7FAFC",
    },
    purple: {
      900: "#181B23",
      800: "#44337A",
      700: "#553C9A",
      600: "#6B46C1",
      500: "#805AD5",
      400: "#9F7AEA",
      300: "#B794F4",
      200: "#D6BCFA",
      100: "#E9D8FD",
      50: "#FAF5FF",
    },
    yellow: {
      // 900: "#5F370E",
      // 800: "#744210",
      // 700: "#975A16",
      // 600: "#B7791F",
      // 500: "#D69E2E",
      // 400: "#ECC94B",
      // 300: "#F6E05E",
      // 200: "#FAF089",
      // 100: "#FEFCBF",
      // 50: "#FFFFF0",
    },
    pink: {
      // 900: "#521B41",
      // 800: "#C586C0",   
      // 700: "#97266D",
       600: "#C586C0",
      // 500: "#D53F8C",
      // 400: "#ED64A6",
      // 300: "#F687B3",
      // 200: "#FBB6CE",
      // 100: "#FED7E2",
      // 50: "#FFF5F7",
    },
    cyan: {
      // 1000: "#00323C",
      // 900: "#065666",
      // 800: "#086F83",
      // 700: "#0987A0",
      // 600: "#00A3C4",
      // 500: "#00B5D8",
      // 400: "#0BC5EA",
      300: "#569CD6",
      // 200: "#9DECF9",
      // 100: "#C4F1F9",
      // 50: "#EDFDFD",
    },
    orange:{
      400:"#CE9178"
    },
    green:{
      400:"#6A9955"
    }
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    "0.75rem": "0.75rem",
    "0.875rem": "0.875rem",
    "1rem": "1rem",
    "1.125rem": "1.125rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.875rem": "1.875rem",
    "2.25rem": "2.25rem",
    "3rem": "3rem",
    "3.75rem": "3.75rem",
    "4.5rem": "4.5rem",
    "6rem": "6rem",
    "8rem": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    "0.125rem":"0.125rem",
    "0.250rem":"0.250rem",
    "0.500rem":"0.500rem",
    ".75rem": ".75rem",
    "1rem": "1rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.75rem": "1.75rem",
    "2rem": "2rem",
    "2.25rem": "2.25rem",
    "2.5rem": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space: {
    "0.125rem": "0.125rem",
    "0.25rem": "0.25rem",
    "0.375rem": "0.375rem",
    "0.5rem": "0.5rem",
    "0.625rem": "0.625rem",
    "0.75rem": "0.75rem",
    "0.875rem": "0.875rem",
    "1rem": "1rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.75rem": "1.75rem",
    "2rem": "2rem",
    "2.25rem": "2.25rem",
    "2.5rem": "2.5rem",
    "3rem": "3rem",
    "3.125rem": "3.125rem",
    "3.5rem": "3.5rem",
    "4rem": "4rem",
    "5rem": "5rem",
    "6rem": "6rem",
    "7rem": "7rem",
    "8rem": "8rem",
    "9rem": "9rem",
    "10rem": "10rem",
    "11rem": "11rem",
    "12rem": "12rem",
    "13rem": "13rem",
    "14rem": "14rem",
    "15rem": "15rem",
    "16rem": "16rem",
    "18rem": "18rem",
    "20rem": "20rem",
    "24rem": "24rem",
  },
  width:{
    "200px": "12.5rem",
    "250px": "15rem",
    "275px": "17.187rem",
    "300px": "18.75rem",
    "350px": "21.875rem",
    "400px": "25rem",
    "500px": "31.25rem",
    "600px": "37.5rem",
  }
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: ${theme.colors.gray[300]};
    color:${theme.colors.orange[400]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, label{
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSizes["1rem"]};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:  ${theme.fontWeights.bold};
    color: ${theme.colors.pink[600]};


  }

  p{
    display: flex;
    align-items: center;
    
  }


  

  .Main{
    display:flex;
    flex-direction:row;
    with:100%;
    
  }



`;
