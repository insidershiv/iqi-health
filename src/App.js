import { ThemeProvider } from "@material-ui/core";
// import "./App.css";
import SignUp from "./components/auth/signUp";
import theme from "./theme/theme";
import Home from "./screens/home/home";
import Search from "./screens/search/search";
import SignUp2 from "./components/auth/signUp2";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      {/* <Search /> */}
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
