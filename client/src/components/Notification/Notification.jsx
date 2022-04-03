import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Notification = ({ message, type, onClose }) => {
  return (
    <Snackbar open={true} anchorOrigin={{vertical: 'top',horizontal: 'center'}} autoHideDuration={5000} onClose={onClose}>
        <Alert severity={type} onClose={onClose}>
            {message}
        </Alert>
    </Snackbar>
  );
}

export default Notification;
