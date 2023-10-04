import AppRoutes from "@/routes";
import styled from "styled-components";
import { SideBar } from "./components/SideBar";

import { ContactInfo } from "@/mocks/pt-br";
import { theme } from "@/App.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 1000px;
  margin: auto;

  .Main {
    display: flex;
    flex-direction: row;
    with: 100%;
  }

  .BannerImage {
    height: ${theme.width["250px"]};
    width: 1000px;
    border-radius: 5px 5px 5px 5px;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <img
          className="BannerImage"
          src={ContactInfo.BannerImage.Content}
          alt={ContactInfo.BannerImage.Alt}
        />
      </div>
      <div className="Main">
        <SideBar />
        <AppRoutes />
      </div>
    </Container>
  );
}

export default App;
