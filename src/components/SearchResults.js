import React from 'react';
import styles from '../styles/SearchResults.module.css';
import { CiSearch } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { IoOptionsOutline } from 'react-icons/io5';

function SearchResults({ formData, handleChange, handleSubmit }) {
  return (
    <div className={styles.searchform}>
      <form onSubmit={handleSubmit}>
        <input
          id='main_search'
          name='main_search'
          type='text'
          className={styles.input}
          onChange={handleChange}
          placeholder='title or tool...'
        />
        <input
          id='location_search'
          name='location_search'
          type='text'
          className={styles.input}
          onChange={handleChange}
          placeholder='city, state, zip code...'
        />

        <button type='btn-location' className={styles.location}>
          {' '}
          <CiLocationOn />{' '}
        </button>
        <button type='submit' className={styles.button}>
          {' '}
          <CiSearch />{' '}
        </button>
        <button type='btn' className={styles.button}>
          <IoOptionsOutline />
        </button>
      </form>

      <h2 className={styles.results}>0 Results found</h2>
    </div>
  );
}
export default SearchResults;
