import './Cards.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GoogleIcon from '@mui/icons-material/Google';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Switch from '@mui/material/Switch';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, red } from '@mui/material/colors';
import { useState } from 'react';

const IconCard = ({ type }) => {
    const [paperHover, setPaperHover] = useState(0);

    const onHover = () => {
        if (paperHover === 0) {
            setPaperHover(2);
        } else {
            setPaperHover(0);
        };
    };

    return (
        <Paper elevation={paperHover} sx={{bgcolor: '#212121'}} className="dashboard-paper" onMouseOver={onHover} onMouseOut={onHover}>
            <Grid
            container
            direction= 'column'
            rowSpacing={0}>
                <Grid item >
                    <Grid container direction="row">
                        <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <span style={{marginLeft: 10, height: 15, width: 15, backgroundColor: red[600], borderRadius: '50%'}}></span>
                            <Typography variant="subtitle1" sx={{ml: 1, color: 'rgba(255, 255, 255, 0.5)'}}>Credentials</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Switch />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {
                        type === 'google'
                        ? <GoogleIcon sx={{fontSize: 62,verticalAlign: 'middle'}} />
                        : <MusicNoteIcon sx={{fontSize: 62,verticalAlign: 'middle'}} />
                    }
                </Grid>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Button sx={{mb: 1}} startIcon={<SettingsIcon />}>
                        Manage settings
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default IconCard
