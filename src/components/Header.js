import React, { useState } from 'react';
import PopupMenu from './PopupMenu';
import styles from '../styles/Header.module.css';
import Popover from '@mui/material/Popover';
import SignInForm from './SignInForm';
import useWindowDimensions from '../utilities/useWindowDimensions';
import logo from '../logo.PNG';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { height, width } = useWindowDimensions();

  return (
    <div>
      {width <= 915 ? (
        <div>
          <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
            <a className={`navbar-brand ${styles.brand}`} href='#'>
              JOB PORTAL
            </a>
            <button
              className={`navbar-toggler ${styles.toggler}`}
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='list-group d-block d-sm-none'>
                <li className={`list-unstyled border-0 p-2, ${styles.list}`}>
                  {' '}
                  <a href='' className='text-light'>
                    Home{' '}
                  </a>
                </li>
                <li className={`list-unstyled border-0 p-2, ${styles.list}`}>
                  {' '}
                  <a href='' className='text-light'>
                    Resume Servies{' '}
                  </a>
                </li>
                <li className={`list-unstyled border-0 p-2, ${styles.list}`}>
                  {' '}
                  <a href='' className='text-light'>
                    Portfolio Review{' '}
                  </a>
                </li>
                <li className={`list-unstyled border-0 p-2, ${styles.list}`}>
                  {' '}
                  <a href='' className='text-light'>
                    Events & Meetups{' '}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ) : (
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
              <SignInForm />
            </Popover>
          </div>
          <nav className={styles.navbar}>
            {/* <div className='d-block d-sm-none'>
          <PopupMenu />
        </div> */}
            {/* <PopupMenu /> */}

            <a href='#' className={styles.logo}>
              <img src={logo} alt='logo' />
            </a>
            <ul className={styles.navlinks}>
              <li className={styles.navitem}>
                <a href='#'>Home</a>
              </li>
              <li className={styles.navitem}>
                <a href='#'>Resume Services</a>
              </li>
              <li className={styles.navitem}>
                <a href='#'>Portfolio Review</a>
              </li>
              <li className={styles.navitem}>
                <a href='#'>Events & Meetups</a>
              </li>
            </ul>
            <ul className={styles.navlinks}>
              <li className={styles.navitem} onClick={handleClick}>
                <a href='#' className={styles.login}>
                  Login
                </a>
              </li>
              <li className={styles.navitem}>
                <a href='#' className={styles.login}>
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;

// import styles from '../styles/Header.module.css';

// const Header = () => {
//   const handleClick = () => {};
//   return (
//     <nav className={styles.navbar}>
//       <a href='#' className={styles.logo}>
//         <img src='../../public/logo.png' alt='logo' />
//       </a>
//       <ul className={styles.navlinks}>
//         <li className={styles.navitem}>
//           <a href='#'>Home</a>
//         </li>
//         <li className={styles.navitem}>
//           <a href='#'>Resumes Services</a>
//         </li>
//         <li className={styles.navitem}>
//           <a href='#'>Events & Meetups</a>
//         </li>
//         <li className={styles.navitem}>
//           <div onClick={handleClick}>
//             <a href='#'>Login</a>
//           </div>
//         </li>
//         <li className={styles.navitem}>
//           <a href='#'>Sign Up</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;
