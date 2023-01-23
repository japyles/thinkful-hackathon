import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ListJobs from './components/ListJobs';
import Routing from './components/Routing';
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
        </Routes>
        {/* <HomePage theme={theme} loggedIn={loggedIn} /> */}
      </Layout>
    </div>
  );
}

export default App;
