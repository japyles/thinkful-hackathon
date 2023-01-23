import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/Search';
import Place from '@mui/icons-material/Place';
import TuneIcon from '@mui/icons-material/Tune';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import JobCard from './JobCard';
import data from '../data/trendingJobs.json';
import appliedSaved from '../data/appliedSaved.json';
import styles from '../styles/HomePage.module.css';

import ListJobs from './ListJobs';

const HomePage = ({ theme, loggedIn }) => {
  const [searchTerm, setSearchTerm] = useState({});
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    fetch('/jobData.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jobData) {
        console.log(jobData);
        setJobs(jobData);
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  // const searchSubmit = () => {};
  // const handleSearch = () => {};

  return (
    <div>
      <form className={styles.form}>
        <Input
          id='job'
          name='job'
          type='text'
          placeholder='Job Title or Skill'
          onChange={(event) => {
            setSearchTerm(event.target.value.toLowerCase());
          }}
          className={`${styles.input} ${styles.job}`}
          style={{ padding: '4px' }}
        ></Input>{' '}
        <Input
          className={styles.input}
          style={{ padding: '4px' }}
          type='text'
          placeholder='Location'
          value={setSearchTerm}
          endAdornment={
            <InputAdornment position='start'>
              <IconButton>
                <Place />
              </IconButton>
            </InputAdornment>
          }
        />{' '}
        <div className={styles.button}>
          <Button
            type='submit'
            variant='outlined'
            style={{
              color: theme.palette.neutral.main,
              marginTop: '3px',
              marginLeft: '8px',
              marginRight: '15px',
            }}
          >
            <Search />
          </Button>{' '}
          <Button style={{ marginTop: '4px' }}>
            <TuneIcon fontSize='large' color='action' />
          </Button>
        </div>
      </form>

      {jobs
        .filter((value) => {
          if (searchTerm === '') {
            return null;
          } else if (value.title.toLowerCase().includes(searchTerm)) {
            return value;
          }
          return null;
        })
        .map((val, key) => {
          return (
            <div className='user' key={key}>
              <ListJobs job={val} key={key} />
              {/* {val.title} */}
            </div>
          );
        })}

      <div>
        {loggedIn ? (
          <div className={styles.savedJobs}>
            {appliedSaved &&
              appliedSaved.map(({ title, quantity }) => (
                <div className={styles.cardItem}>
                  <JobCard title={title} quantity={quantity} />
                </div>
              ))}
          </div>
        ) : null}
        {/* <div className={styles.savedJobs}>
          {appliedSaved &&
            appliedSaved.map(({ title, quantity }) => (
              <div className={styles.cardItem}>
                <JobCard title={title} quantity={quantity} />
              </div>
            ))}
        </div> */}

        <h1 className={styles.trending}>Trending</h1>

        <div className={styles.card}>
          {data &&
            data.map(({ title, subTitle, quantity }) => (
              <div className={styles.cardItem}>
                <JobCard
                  title={title}
                  subTitle={subTitle}
                  quantity={quantity}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
