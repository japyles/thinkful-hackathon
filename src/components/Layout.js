import Header from './Header';
import Footer from './Footer';
// import Routing from './Routing';

const Layout = ({ children, formSubmit, loggedIn, handleSignout }) => {
  return (
    <div>
      <Header
        formSubmit={formSubmit}
        loggedIn={loggedIn}
        handleSignout={handleSignout}
      />
      {/* <Routing /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
