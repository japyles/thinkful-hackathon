import styles from '../styles/Header.module.css';
import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import SignInForm from './SignInForm';

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
          <SignInForm />
        </Popover>
      </div>
      <nav className={styles.navbar}>
        <a href='#' className={styles.logo}>
          <img src='../../public/logo.png' alt='logo' />
        </a>
        <ul className={styles.navlinks}>
          <li className={styles.navitem}>
            <a href='#'>Home</a>
          </li>
          <li className={styles.navitem}>
            <a href='#'>Resumes Services</a>
          </li>
          <li className={styles.navitem}>
            <a href='#'>Events & Meetups</a>
          </li>
          <li className={styles.navitem} onClick={handleClick}>
            <a href='#'>Sign In</a>
          </li>
          <li className={styles.navitem}>
            <a href='#'>Sign Up</a>
          </li>
        </ul>
      </nav>
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
