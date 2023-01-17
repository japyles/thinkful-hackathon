import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
// import { createTheme } from '@mui/material/styles';
// import { teal } from '@mui/material/colors';
import styles from '../styles/SignIn.module.css';

const SignIn = ({ theme }) => {
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

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>exact Role</h2>
          <h2>No, Nonsense</h2>
        </div>
        <div className={styles.right}>
          <h2>Welcome back</h2>
          <h1>Sign In ________</h1>

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
              style={{ color: theme.palette.neutral.main, marginTop: '15px' }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
      {/* <div
        style={{
          marginLeft: '30%',
        }}
      >
        <h4>How to show and hide password in ReactJS?</h4>
        <InputLabel htmlFor='standard-adornment-password'>
          Enter your Password
        </InputLabel>
        <Input
          type={values.showPassword ? 'text' : 'password'}
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
      </div> */}
      <div className={styles.graphic}></div>
    </div>
  );
};

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#009688',
//       darker: '#004d40',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });

export default SignIn;
