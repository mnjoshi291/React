import "./App.css";
import LandingPage from "./Component/LandingPage";
import VideoPage from './Component/VideoPage';
import { Route, Switch } from "react-router-dom";

export const config = {
  endpoint:`https://f903e1f4-e507-48ca-92e2-c469190b22e8.mock.pstmn.io/v1`
  
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
