import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import useWindowDimensions from '../utilities/useWindowDimensions';
import logo from '../logo.png';

const Header = ({ formSubmit, loggedIn, handleSignout }) => {
  const [anchorEl, setAnchorEl] = useState('');
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const [email, setEmail] = useState('');

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { height, width } = useWindowDimensions();

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <div>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <div>
            <form className={styles.form} onSubmit={formSubmit}>
              <Input
                type='email'
                name='email'
                placeholder='E-mail'
                value={email}
                onChange={handleChangeEmail}
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
                type='submit'
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
        </Popover>
      </div>

      <nav className={styles.navbar}>
        <Link to='/' className={styles.logo}>
          <img src={logo} alt='logo' />
        </Link>

        <ul className={styles.navlinks}>
          <li className={styles.navitem}>
            <button className='btn'>
              <Link to='/' className={styles.link}>
                Home
              </Link>
            </button>
          </li>
          <li className={`dropdown ${styles.dropmenu}`}>
            <button
              className='btn dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Resume Services
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link className='dropdown-item' to='/resume-service-1'>
                Service 1
              </Link>
              <Link className='dropdown-item' to='/resume-service-2'>
                Service 2
              </Link>
              <Link className='dropdown-item' to='/resume-service-3'>
                Service 3
              </Link>
            </div>
          </li>
          <li className={styles.navitem}>
            <button className='btn'>
              <Link to='/portfolio-review' className={styles.link}>
                portfolio Review
              </Link>
            </button>
          </li>
          <li className={styles.navitem}>
            <button className='btn'>
              <Link to='/events-meetups' className={styles.link}>
                Events & Meetups
              </Link>
            </button>
          </li>
          <div className={styles.signin}>
            {loggedIn ? (
              <li className={styles.navitem} onClick={handleSignout}>
                <a href='#' className={styles.login}>
                  Logout
                </a>
              </li>
            ) : (
              <li className={styles.navitem} onClick={handleClick}>
                <a href='#' className={styles.login}>
                  Login
                </a>
              </li>
            )}
            <li className={styles.navitem}>
              <a href='#' className={styles.login}>
                Sign Up
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
