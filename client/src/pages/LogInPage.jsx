import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
        <div>
            <Box sx={{display: {xs: 'none', md: 'flex'}, width: '70%', margin: '0 auto'}}>
                <Grid container justifyContent='center'>
                    <Box component='form' onSubmit={onSubmit} sx={{mt:8, height: 450, width: '25%', minWidth: 300, border: 1, borderColor: 'grey.500', borderRadius: 2, bgcolor:'#212121', '&:hover':{borderColor: 'white'}}}>
                        <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', mt: 4}}>
                            <HeadphonesIcon color="primary" sx={{fontSize: 62}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                            <Typography variant='h5' sx={{fontWeight: 'regular', color: 'white'}}>JARVIS</Typography>
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                            <TextField label="Username" value={userName} onChange={(e) => setUserName(e.target.value)} sx={{width: '90%'}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                            <TextField label="Password" type='password' value={psw} onChange={(e) => setPsw(e.target.value)} sx={{width: '90%'}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                            <Button variant='outlined' type='submit' sx={{width: '90%'}} >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 1}}>
                            <Link href="#" underline="hover">
                                <Typography>Forgot password?</Typography>
                            </Link>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}, width: '80%', margin: '0 auto'}}>
                <Grid container justifyContent='center'>
                    <Box component='form' onSubmit={onSubmit} sx={{mt:8, height: 450, width: '25%', minWidth: 300, border: 1, borderColor: 'grey.500', borderRadius: 2, bgcolor:'#212121', '&:hover':{borderColor: 'white'}}}>
                        <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', mt: 4}}>
                            <HeadphonesIcon color="primary" sx={{fontSize: 62}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                            <Typography variant='h5' sx={{fontWeight: 'regular', color: 'white'}}>JARVIS</Typography>
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                            <TextField label="Username" value={userName} onChange={(e) => setUserName(e.target.value)} sx={{width: '90%'}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                            <TextField label="Password" type='password' value={psw} onChange={(e) => setPsw(e.target.value)} sx={{width: '90%'}} />
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                            <Button variant='outlined' type='submit' sx={{width: '90%'}} >
                                Sign In
                            </Button>
                        </Grid>
                        <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 1}}>
                            <Link href="#" underline="hover">
                                <Typography>Forgot password?</Typography>
                            </Link>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </div>
  )
}

export default LogInPage
