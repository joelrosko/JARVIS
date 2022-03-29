import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import InputField from '../components/base_components/InputField';
import Buttons from '../components/base_components/Buttons';
import Typography from '@mui/material/Typography';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const LogInPage = () => {
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [psw, setPsw] = useState('');

    const logIn = async (userName, psw) => {
        const res = await fetch('api/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            userName, psw
          })
        });
        const data = await res.json()
        navigate('/')
    };

    const onSubmit = (e) => {
        e.preventDefault();
        logIn(userName, psw);
    };
    
    return (
        <Grid container justifyContent='center'>
            <Box component='form' onSubmit={onSubmit} sx={{mt:8, p: 2, height: 450, width: '25%', minWidth: 300, border: 1, borderColor: 'grey.500', borderRadius: 2, bgcolor:'#212121', '&:hover':{borderColor: 'white'}}}>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', mt: 4}}>
                    <HeadphonesIcon color="primary" sx={{fontSize: 62}} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <Typography variant='h5' sx={{fontWeight: 'regular', color: 'white'}}>JARVIS</Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', mt: 6}}>
                    <InputField label='Username' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <InputField label='Password' password={true} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    <Link href="#" underline="hover">
                        <Typography>Forgot password?</Typography>
                    </Link>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                    <Buttons type='submit' label='Sign in' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 1}}>
                    <Link onClick={() => navigate('/register')} underline="hover" sx={{cursor: 'pointer'}}>
                        <Typography>Create an account</Typography>
                    </Link>
                </Grid>
            </Box>
        </Grid>
  )
}

export default LogInPage
