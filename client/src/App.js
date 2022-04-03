import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/system/Box';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';

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
  const [userNotification, setUserNotification] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const onNotificationClose = () => {
    setUserNotification({
      show: false,
      message: '',
      type: 'success'
    });
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      {userNotification.show && <Notification message={userNotification.message} type={userNotification.type} onClose={onNotificationClose} />}
      <Box sx={{display: {xs: 'none', md: 'flex'}, width: '70%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage addNotification={setUserNotification} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Box sx={{display: {xs: 'flex', md: 'none'}, width: '80%', margin: '0 auto'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/register' element={<RegisterPage addNotification={setUserNotification} />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
