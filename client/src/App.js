import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  /*typography: {
    fontFamily: [
      //`"Lucida Console", "Courier New", monospace`,
      `'Helvetica Neue', sans-serif`,
    ]},*/
});

function App() {

  const loggedIn = false;

  return (
    <ThemeProvider theme={darkTheme}>
      <p>Hello World!</p>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
