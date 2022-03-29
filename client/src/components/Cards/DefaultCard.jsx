import './Cards.css';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { useState } from 'react';

const DefaultCard = ({ lbl }) => {
    const [paperHover, setPaperHover] = useState(0);

    const onHover = () => {
        if (paperHover === 0) {
            setPaperHover(2);
        } else {
            setPaperHover(0);
        };
    };

    const icons = {
        "Set Alarm": (<AccessAlarmIcon sx={{fontSize: 62, mt: 1}} />),
        "Add Note":  (<NoteAddOutlinedIcon sx={{fontSize: 62, mt: 1}} />),
        "Public APIs": (<IntegrationInstructionsOutlinedIcon sx={{fontSize: 62, mt: 1}} />),
        "Philips hue": (<EmojiObjectsOutlinedIcon sx={{fontSize: 62, mt: 1}} />)
    };

    return (
        <Paper elevation={paperHover} sx={{bgcolor: '#212121'}} className="dashboard-paper" onMouseOver={onHover} onMouseOut={onHover}>
            <Grid
                container
                direction= 'column'
                rowSpacing={0}>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {icons[lbl]}
                </Grid>
                <Grid item sx={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='h5' sx={{fontWeight: 'regular', mb: 1}}>{lbl}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DefaultCard
