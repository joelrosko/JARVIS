import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import InputField from '../components/base_components/InputField';
import Buttons from '../components/base_components/Buttons';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const RegisterPage = ({ addNotification }) => {
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [showPsw, setShowPsw] = useState(false);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleShowPsw = () => {
        setShowPsw(!showPsw);
    };

    const registerUser = async () => {
        const res = await fetch('api/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userName, email, password
            })
        });

        const data = await res.json();
        if (data.hasOwnProperty('error')) {
            addNotification({
                show: true,
                message: data.error,
                type: 'error'
            });
            setUserName('');
            setEmail('');
            setPassword('');
            setRepeatPassword('');
        } else {
            addNotification({
                show: true,
                message: data.message,
                type: 'success'
            });
            navigate('/login')
        }        
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (userName && email && password && repeatPassword) {
            if (password === repeatPassword) {
                registerUser();
            } else {
                addNotification({
                    show: true,
                    message: 'Passwords are not equal',
                    type: 'info'
                });
            }
        } else {
            addNotification({
                show: true,
                message: 'Please enter all fields',
                type: 'info'
            });
        }
    };

    return (
        <Grid container justifyContent='center'>
            <Box component='form' onSubmit={onSubmit} sx={{mt:8, p: 2, width: '25%', minWidth: 300, border: 1, borderColor: 'grey.500', borderRadius: 2, bgcolor:'#212121', '&:hover':{borderColor: 'white'}}}>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', mt: 4}}>
                    <HeadphonesIcon color="primary" sx={{fontSize: 62}} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <Typography variant='h5' sx={{fontWeight: 'regular', color: 'white'}}>Create new account</Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', mt: 6}}>
                    <InputField label='Username' value={userName} setValue={setUserName} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', mt: 2}}>
                    <InputField label='Email' value={email} setValue={setEmail} type='email' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <TextField label="New password" type={showPsw ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPsw} edge="end">
                                    {showPsw ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    sx={{width: '100%'}}/>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <TextField label="Repeat password" type={showPsw ? 'text' : 'password'} value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPsw} edge="end">
                                    {showPsw ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    sx={{width: '100%'}}/>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                    <Buttons type='submit' label='Sign up' onPress={onSubmit} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 1}}>
                    <Link onClick={() => navigate('/login')} underline="hover" sx={{cursor: 'pointer'}}>
                        <Typography>Back to sign in page</Typography>
                    </Link>
                </Grid>
            </Box>
        </Grid>
  )
}

export default RegisterPage
