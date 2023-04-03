
import { useNavigate } from "react-router-dom";
import { Container } from "./index.styled";
import { UserData } from "@/mocks/pt-br";

const Home = () => {



  const navigate = useNavigate();




  return (
    <Container>
      <div className="">
        <h1>{UserData.Name}</h1>
        <h2>{UserData.Cargo}</h2>


      </div>


      <div className="ContentGroup">
        <p className="Title">{UserData.AboutMe.Name}</p>
        <div className="Line"></div>
        <p className="Date"></p>
        <p className="Content">{UserData.AboutMe.Content}</p>


      </div>




      <div className="ContentGroup">
        <p className="Title">{UserData.WorkExperience.Name}</p>
        <div className="Line"></div>

        <p className="Date">{UserData.WorkExperience.Content.Dash.Date} {UserData.WorkExperience.Content.Dash.Cargo}</p>
        <p className="Name">{UserData.WorkExperience.Content.Dash.Name} </p>
        {
          UserData.WorkExperience.Content.Dash.Content.map((data, index) => {
            return <p key={index} className="Content"> {data}</p>
          })
        }

        <p className="Date">{UserData.WorkExperience.Content.Dash.Date} {UserData.WorkExperience.Content.Dash.Cargo}</p>
        <p className="Name">{UserData.WorkExperience.Content.Dash.Name} </p>

        {
          UserData.WorkExperience.Content.Eb.Content.map((data, index) => {
            return <p key={index} className="Content"> {data}</p>
          })
        }


      </div>






    </Container>
  );
};

export default Home;
