import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from "react-router-dom";

import IconCard from '../Cards/IconCard';
import DefaultCard from '../Cards/DefaultCard';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import Notes from '../Notes/Notes';
import StartButton from '../StartButton/StartButton';

const Dashboard = () => {
    return (
        <Grid
        container
        justify="center"
        alignItems="center"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, lg: 6 }}
        sx={{mt: [1, 2]}}>
            <Grid item xs={6} md={4} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <IconButton component={Link} to="/" color="primary" size="large">
                    <HeadphonesIcon sx={{fontSize: 122}} />
            </IconButton>
            </Grid>
            <Grid item xs={6} md={4} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <MusicPlayer />
            </Grid>
            <Grid item xs={6} md={4}>
                <DefaultCard lbl={'Set Alarm'} />
            </Grid>
            <Grid item xs={6} md={4}>
                <DefaultCard lbl={'Add Note'} />
            </Grid>
            <Grid item xs={6} md={4}>
                <DefaultCard lbl={'Public APIs'} />
            </Grid>
            <Grid item xs={6} md={4}>
                <DefaultCard lbl={'Philips hue'} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <IconCard type='google' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <IconCard type='spotify' />
            </Grid>
            <Grid item xs={12}>
                <Notes />
            </Grid>
            <Grid item sx={{display: 'flex', width: '100%', justifyContent: 'center'}} >
                <StartButton />
            </Grid>
        </Grid>
    )
}

export default Dashboard
