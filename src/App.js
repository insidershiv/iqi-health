import { ThemeProvider } from "@material-ui/core";
// import "./App.css";
import SignUp from "./components/auth/signUp";
import theme from "./theme/theme";
import Home from "./screens/home/home";
import Hospitals from "./screens/search/search";
import HealthPackage from "./screens/packages/packages";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from "./routes/privateRoute";
import React from "react";
import PublicRoute from "./routes/publicRoute";
import DefaultRoute from "./routes/defaultRoute";
import Loader from "./utils/loader";
import Cart from "./screens/cart/cart";

// const Home = React.lazy(() => import('./screens/home/home'));
// const SignUp = React.lazy(() => import("./components/auth/signUp"))
function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>


        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/dashboard" name="Home" render={props => <Home {...props} />} />
            {/* <PublicRoute exact path="/signup" name="Signup" LoadComponent={SignUp} /> */}
            <Route exact path="/signup" name="Signup" render={props => <SignUp {...props} />} />
            <Route exact path="/health-packages" name="Health Packages" render={props => <HealthPackage {...props} />} />
            <Route exact path="/hospitals" name="Hospitals" render={props => <Hospitals {...props} />} />
            {/* <PrivateRoute exact path="/dashboard" name="Home" LoadComponent={Home} /> */}
            <Route exact path="/cart" name="Cart" render={props => <Cart {...props} />} />

            <DefaultRoute />
          </Switch>

        </ThemeProvider>
      </React.Suspense>
    </Router>
  );
}

export default App;
