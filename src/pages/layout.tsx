import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="navbar">
      <h1 className="navbar--title">workout tracker</h1>
      <section className="navbar--route">
      <Link to="/user"><button className="navbar--button">user</button></Link>
      <Link to="/workout"><button className="navbar--button">workout</button></Link>
      <Link to="/exercise"><button className="navbar--button">exercise</button></Link>
      </section>
      <section className="navbar--login">
      <Link to="/login"><button className="navbar--button">Login</button></Link>
      <Link to="/register"><button className="navbar--button">Register</button></Link>        
      </section>
    </div>
      <Outlet />
    </>
  )
};

export default Layout;