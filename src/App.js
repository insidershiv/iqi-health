import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { ThemeProvider, Typography } from '@material-ui/core';

function App() {
    return (
        <ThemeProvider theme={theme}>


        </ThemeProvider>
    );
}

export default App;