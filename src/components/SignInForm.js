import { useState } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme } from '@mui/material/styles';
import styles from '../styles/SignInForm.module.css';

const SignInForm = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const formSubmit = () => {};

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#009688',
        darker: '#004d40',
      },
      neutral: {
        main: '#263238',
        contrastText: '#cfd8dc',
      },
    },
  });

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmit}>
        <Input
          type='email'
          name='email'
          placeholder='E-mail'
          className={styles.input}
        ></Input>

        <Input
          className={styles.input}
          type={values.showPassword ? 'text' : 'password'}
          placeholder='Password'
          onChange={handlePasswordChange('password')}
          value={values.password}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />

        <Button
          variant='outlined'
          style={{
            color: theme.palette.neutral.main,
            marginTop: '15px',
            marginLeft: '55px',
            marginRight: '55px',
          }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
