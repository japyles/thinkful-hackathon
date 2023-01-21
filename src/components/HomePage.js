import React from 'react';
import { useState } from 'react';
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

import SearchForm from './SearchForm';
import ListJobs from './ListJobs';

const HomePage = ({ theme }) => {
  const [search, setSearch] = useState({});

  const searchSubmit = () => {};
  const handleSearch = () => {};

  return (
    <div>
      {/* <SearchForm /> */}
      <form className={styles.form} onSubmit={searchSubmit}>
        <Input
          type='text'
          name='job'
          placeholder='Job Title or Skill'
          className={styles.input}
          style={{ padding: '4px' }}
        ></Input>{' '}
        <Input
          className={styles.input}
          style={{ padding: '4px' }}
          type='text'
          placeholder='Location'
          onChange={handleSearch}
          value={setSearch}
          endAdornment={
            <InputAdornment position='start'>
              <IconButton>
                <Place />
              </IconButton>
            </InputAdornment>
          }
        />{' '}
        <Button
          variant='outlined'
          style={{
            color: theme.palette.neutral.main,
            marginTop: '3px',
          }}
        >
           <Search />
        </Button>{' '}
        <Button style={{ marginTop: '4px' }}>
          <TuneIcon fontSize='large' color='action' />
        </Button>
      </form>

      <ListJobs/>

      <div>
        <div className={styles.savedJobs}>
          {appliedSaved &&
            appliedSaved.map(({ title, quantity }) => (
              <div className={styles.cardItem}>
                <JobCard title={title} quantity={quantity} />
              </div>
            ))}
        </div>

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
