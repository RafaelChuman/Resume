import AppRoutes from "@/routes";
import styled from "styled-components";
import { SideBar } from "./components/SideBar";

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

function App() {
  return (
    <Container>
      <div className="Main">
        <SideBar />

       
          <AppRoutes />
 
      </div>
    </Container>
  );
}

export default App;
