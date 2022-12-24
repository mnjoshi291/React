import "./App.css";
import LandingPage from "./Component/LandingPage";
import VideoPage from './Component/VideoPage';
import { Route, Switch } from "react-router-dom";

export const config = {
  endpoint:`https://backend-0juv.onrender.com/v1`
  
};
function App() {
  return (
    <div style={{ backgroundColor: "#181818", minHeight: "100vh" }}>
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/Video/:id" component={VideoPage} />
      </Switch>
    </div>
  );
}

export default App;
