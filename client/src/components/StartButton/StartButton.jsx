import Fab from '@mui/material/Fab';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import { useState } from 'react';
import { green, red } from '@mui/material/colors';

const StartButton = () => {
    const [activeIcon, setActiveIcon] = useState(false);

    const defaultStyle = {
        position: 'fixed',
        bottom: 15,
        color: 'inherit',
    };

    const playStyle = {
        bgcolor: green[600],
        '&:hover': {
            bgcolor: green[500],
        },
    };

    const stopStyle = {
        bgcolor: red[600],
        '&:hover': {
            bgcolor: red[500],
        }
    };

    let style = {...defaultStyle, ...playStyle };

    if (activeIcon) {
        var currentIcon = <PowerSettingsNewRoundedIcon sx={{fontSize: 45}} />
        style = {...defaultStyle, ...stopStyle};
    } else {
        var currentIcon = <PowerSettingsNewRoundedIcon sx={{fontSize: 45}} />
        style = {...defaultStyle, ...playStyle};
    };

    return (
        <Fab color='primary' onClick={() => setActiveIcon(!activeIcon)} sx={style}>
            {currentIcon}
        </Fab>
    )
}

export default StartButton
