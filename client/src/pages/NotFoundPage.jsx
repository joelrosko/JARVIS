import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Grid container justify="center" alignItems="center" sx={{mt: [8, 9]}}>
            <Paper elevation={0} sx={{bgcolor: '#212121', border: 1, borderRadius: 2, width: '100%'}}>
                <Grid container direction='column' justifyContent='center' alignItems='center'>
                    <Grid item>
                        <Typography variant='h3' sx={{m: 2}} >ERROR 404, page not found</Typography>
                    </Grid>
                    <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button sx={{mb: 1}} > Return to start page</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NotFoundPage
