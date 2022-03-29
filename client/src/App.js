import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
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
      <Box sx={{display: {xs: 'none', md: 'flex'}, width: '70%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
        </Routes>
      </Box>
      <Box sx={{display: {xs: 'flex', md: 'none'}, width: '80%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
