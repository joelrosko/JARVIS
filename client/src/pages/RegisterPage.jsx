import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import InputField from '../components/base_components/InputField';
import Buttons from '../components/base_components/Buttons';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const RegisterPage = () => {
    const [showPsw, setShowPsw] = useState(false);
    const [newPsw, setNewPsw] = useState('');
    const [repeatPsw, setRepeatPsw] = useState('');

    const handleShowPsw = () => {
        setShowPsw(!showPsw);
    };

    const onSubmit = (e) => {
        e.preventDefault();
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
                    <InputField label='Username' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center', mt: 2}}>
                    <InputField label='Email' />
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'row', justifyContent:'center', mt: 2}}>
                    <TextField label="New password" type={showPsw ? 'text' : 'password'} value={newPsw} onChange={(e) => setNewPsw(e.target.value)} InputProps={{
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
                    <TextField label="Repeat password" type={showPsw ? 'text' : 'password'} value={repeatPsw} onChange={(e) => setRepeatPsw(e.target.value)} InputProps={{
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
                    <Buttons type='submit' label='Sign up' />
                </Grid>
            </Box>
        </Grid>
  )
}

export default RegisterPage
