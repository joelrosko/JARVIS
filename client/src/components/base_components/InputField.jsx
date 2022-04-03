import TextField from '@mui/material/TextField';

const InputField = ({ label, password, value, setValue, type }) => {
  return (
      <div style={{padding: 0, margin: 0, width: '100%'}}>
        {password
                ? <TextField label={label} type='password' value={value} onChange={(e) => setValue(e.target.value)} sx={{width: '100%'}} />
                : <TextField label={label} type={type} value={value} onChange={(e) => setValue(e.target.value)} sx={{width: '100%'}} />
        }
      </div>
  )
}

InputField.defaultProps = {
    label: 'Undefined',
    password: false,
    value: '',
    setValue: () => {},
    type: 'text'
};

export default InputField
