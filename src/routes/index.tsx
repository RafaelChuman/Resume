import HomePage from "@/pages";


import { Routes, Route} from "react-router-dom";

function AppRoutes (){
  
  return (
    <Routes>
        <Route element={<HomePage/>} path="/"></Route>
        {/* <Route element={ (props) => <EditERsComponent createdAt={props.}/>} path="/editer"></Route> */}
    </Routes>
  );
};

export default AppRoutes;