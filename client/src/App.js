import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

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
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Box sx={{display: {xs: 'none', md: 'flex'}, width: '70%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Box sx={{display: {xs: 'flex', md: 'none'}, width: '80%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
