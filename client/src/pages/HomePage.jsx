import Grid from '@mui/material/Grid';
import AlarmNotice from '../components/AlarmNotice.jsx/AlarmNotice';
import Dashboard from '../components/Dashboard/Dashboard';

const HomePage = ({ mTop }) => {
    return (
        <Grid container direction= 'column' rowSpacing={0}>
            <Grid item>
                <AlarmNotice mTop={mTop} />
            </Grid>
            <Grid item>
                <Dashboard />
            </Grid>
        </Grid>
    )
}

HomePage.defaultProps = {
    mTop: 9
}

export default HomePage
