import './Notes.css';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';

const Notes = () => {
    return (
        <List sx={{p: 0, bgcolor: '#212121', border: 1, borderColor: 'rgba(255, 255, 255, 0.12)', borderRadius: 1}} className="note-list">
            <ListItem key={1}>
                <ListItemText primary='Item 1' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
            <Divider component="li" />
            <ListItem key={2}>
                <ListItemText primary='Item 2, nu undrar jag hur mycket plats dehär tar hej' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
            <Divider component="li" />
            <ListItem key={3}>
                <ListItemText primary='Item 3' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
            <Divider component="li" />
            <ListItem key={4}>
                <ListItemText primary='Item 4' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
            <Divider component="li" />
            <ListItem key={5}>
                <ListItemText primary='Item 5' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
            <Divider component="li" />
            <ListItem key={6}>
                <ListItemText primary='Item 6' sx={{color: 'text.primary'}} />
                    <IconButton color="primary" edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                    </IconButton>
            </ListItem>
        </List>
    )
}

export default Notes
