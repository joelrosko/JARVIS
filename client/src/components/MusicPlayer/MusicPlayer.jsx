import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import { useState } from 'react';

const MusicPlayer = () => {
    const [activeIcon, setActiveIcon] = useState(false)
    const [cardElevation, setCardElevation] = useState(0)

    const onPlay = () => {
        setActiveIcon(!activeIcon)
    }
    const onHover = () => {
      if (cardElevation === 0) {
        setCardElevation(2);
      } else {
        setCardElevation(0);
      };
  };
    return (
        <Card elevation={cardElevation} onMouseOver={onHover} onMouseOut={onHover} sx={{ display: 'flex', bgcolor: '#212121' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
               <SkipPreviousIcon />
            </IconButton>
            <IconButton onClick={onPlay} aria-label="play/pause">
                {
                    activeIcon ?
                    <PauseIcon sx={{ height: 38, width: 38 }} />
                    :
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                }
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    )
}

export default MusicPlayer
