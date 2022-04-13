import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import InputField from '../components/base_components/InputField';
import Buttons from '../components/base_components/Buttons';
import Typography from '@mui/material/Typography';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const ForgotPasswordPage = ({ addNotification }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const resetPassword = async () => {
        const res = await fetch('api/users/resetpassword', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userName
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

        if (userName) {
            resetPassword();
        } else {
            addNotification({
                show: true,
                message: 'Please enter username',
                type: 'info'
            });
        }
    }

    return (
        <Grid container justifyContent='center'>
            <Box
                component='form'
                onSubmit={onSubmit}
                sx={{mt:8, p: 2, width: '25%', minWidth: 300, border: 1, borderColor: 'grey.500', borderRadius: 2, bgcolor:'#212121', '&:hover':{borderColor: 'white'}}}
                >
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', mt: 4}}>
                    <HeadphonesIcon color="primary" sx={{fontSize: 62}} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <Typography variant='h5' sx={{fontWeight: 'regular', color: 'white'}}>Reset password</Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', mt: 6}}>
                    <InputField label='Username' value={userName} setValue={setUserName} type='email' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 6}}>
                    <Buttons type='submit' label='Reset password' onPress={onSubmit} />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 1}}>
                    <Link onClick={() => navigate('/login')} underline="hover" sx={{cursor: 'pointer'}}>
                        <Typography>Back to sign in page</Typography>
                    </Link>
                </Grid>
            </Box>
        </Grid>
    );
}

export default ForgotPasswordPage;
