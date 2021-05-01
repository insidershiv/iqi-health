import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { ThemeProvider, Typography } from '@material-ui/core';
import ThemeInput from './components/form-elements/themeInput';
import SignUp from './components/auth/signUp';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SignUp />

        </ThemeProvider>
    );
}

export default App;