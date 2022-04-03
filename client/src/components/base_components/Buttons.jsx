import Button from '@mui/material/Button';

const Buttons = ({ variant, type, color, label, onPress }) => {
  return (
    <div style={{padding: 0, margin: 0, width: '100%'}}>
        {
            type === null
            ? <Button variant={variant} color={color} onClick={onPress} sx={{width: '100%'}}>
                {label}
            </Button>
            : <Button variant={variant} type={type} color={color} onClick={onPress} sx={{width: '100%'}}>
                {label}
            </Button>
        }
    </div>
  )
}

Buttons.defaultProps = {
    variant: 'outlined',
    type: 'button',
    color: 'primary',
    label: 'Undefined',
    onPress: () => {}
}

export default Buttons