import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ColorChangeProps {
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}

const ColorChange = ({ setPrimaryColor, setSecondaryColor }: ColorChangeProps) => {
  const isValidHexColor = (color: string): Boolean => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  const changePrimaryColor = (event: React.ChangeEvent<any>) => {
    if (isValidHexColor(event.target.value)) {
      setPrimaryColor(event.target.value);
    }
  };

  const changeSecondaryColor = (event: React.ChangeEvent<any>) => {
    if (isValidHexColor(event.target.value)) {
      setSecondaryColor(event.target.value);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Change Primary Color" variant="outlined" onChange={changePrimaryColor} />

      <TextField id="filled-basic" label="Change Secondary Color" variant="filled" onChange={changeSecondaryColor} />
    </Box>
  );
};

export default ColorChange;
