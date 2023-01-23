import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ListJobs from './components/ListJobs';
import ResumeService1 from './components/ResumeService1';
import ResumeService2 from './components/ResumeService2';
import ResumeService3 from './components/ResumeService3';
import PortfolioReview from './components/PortfolioReview';
import EventsMeetups from './components/EventsMeetups';
import { createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const formSubmit = (event) => {
    event.preventDefault();

    setLoggedIn(true);
  };

  const handleSignout = () => {
    setLoggedIn(false);
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

  return (
    <div className='App'>
      <Layout
        formSubmit={formSubmit}
        loggedIn={loggedIn}
        handleSignout={handleSignout}
      >
        <Routes>
          <Route
            exact
            path='/'
            element={<HomePage theme={theme} loggedIn={loggedIn} />}
          />
          <Route path='/search-results' element={<ListJobs />} />
          <Route path='/resume-service-1' element={<ResumeService1 />} />
          <Route path='/resume-service-2' element={<ResumeService2 />} />
          <Route path='/resume-service-3' element={<ResumeService3 />} />
          <Route path='/portfolio-review' element={<PortfolioReview />} />
          <Route path='/events-meetups' element={<EventsMeetups />} />
        </Routes>
        {/* <HomePage theme={theme} loggedIn={loggedIn} /> */}
      </Layout>
    </div>
  );
}

export default App;
