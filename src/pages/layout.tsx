import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="navbar--title">workout tracker</h1>
      <Link to="/user"><button className="navbar--button">user</button></Link>
      <Link to="/workout"><button className="navbar--button">workout</button></Link>
      <Link to="/exercise"><button className="navbar--button">exercise</button></Link>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;