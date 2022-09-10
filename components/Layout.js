import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import {Header} from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
