import Header from './Header';
import Footer from './Footer';
import Routing from './Routing';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Routing />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
