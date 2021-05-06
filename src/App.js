import { ThemeProvider } from "@material-ui/core";
// import "./App.css";
// import SignUp from "./components/auth/signUp";
import theme from "./theme/theme";
import Home from "./screens/home/home";
import Hospitals from "./screens/search/search";
import HealthPackage from "./screens/packages/packages";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from "./screens/404";
import PrivateRoute from "./routes/privateRoute";
import React from "react";
import PublicRoute from "./routes/publicRoute";
// const Home = React.lazy(() => import('./screens/home/home'));
const SignUp = React.lazy(() => import("./components/auth/signUp"))
function App() {
  const userData = localStorage.getItem('userData')
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/dashboard" name="Home" render={props => <Home {...props} />} />
          <PublicRoute exact path="/signup" name="Signup" LoadComponent={SignUp} />
          {/* <Route exact path="/signup" name="Signup" render={props => <SignUp {...props} />} /> */}
          <Route exact path="/health-packages" name="Health Packages" render={props => <HealthPackage {...props} />} />
          <Route exact path="/hospitals" name="Hospitals" render={props => <Hospitals {...props} />} />
          {/* <PrivateRoute exact path="/dashboard" name="Home" LoadComponent={Home} /> */}
          <Route render={() => userData && userData.length > 0 ? (
            <Redirect to={
              {
                from: '*',
                pathname: "/dashboard",
              }
            }
            />
          ) : <Redirect to={
            {
              from: '*',
              pathname: "/signup",
            }
          }
          />} />
        </Switch>
        {/* <Home /> */}
        {/* <Search /> */}
        {/* <SignUp /> */}
        {/* <HealthPackage /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
