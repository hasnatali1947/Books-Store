import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="navcontainer">
      <ul className="navbarItems">
        <h1>Bookstore CMS</h1>
        <div className="routerDiv">
          <li className="nav-books">
            {' '}
            <Link to="/">Books</Link>
          </li>
          <li className="nav-categoriens">
            {' '}
            <Link to="Categories">Categories</Link>
          </li>
        </div>
      </ul>
    </div>
    <div className="logo" />
  </nav>
);

export default Navbar;
