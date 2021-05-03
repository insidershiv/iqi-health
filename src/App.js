import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import SignUp from "./components/auth/signUp";
import theme from "./theme/theme";
import Home from "./screens/home/home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      {/* <SignUp /> */}
    </ThemeProvider>
  );
}

export default App;
