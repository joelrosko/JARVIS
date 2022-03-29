import Alert from '@mui/material/Alert';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AlarmNotice = ({ mTop }) => {
  return (
    <Alert variant="outlined" sx={{mt: mTop, borderColor: 'rgba(255, 255, 255, 0.12)', '&:hover': {borderColor: 'white'}}} icon={<AccessAlarmIcon color="primary" fontSize="inherit" />}
        action={
            <Button color="inherit" size="small">
                TURN OFF
            </Button>}
        severity="info">
        <Typography color="text.primary" variant='subtitle2' sx={{cursor: 'default'}}>
            Alarm set for 10:00
        </Typography>
    </Alert>
  )
}

export default AlarmNotice
