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
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        return;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (email) {
            resetPassword();
        } else {
            addNotification({
                show: true,
                message: 'Please enter email',
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
                    <InputField label='Email' value={email} setValue={setEmail} type='email' />
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
