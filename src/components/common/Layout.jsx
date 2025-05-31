import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-16"> {children}</main>
  </>
);

export default Layout;
