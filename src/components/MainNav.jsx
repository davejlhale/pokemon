import { Link } from "react-router-dom";

const MainNav = () => {

    return (
      <nav id="nav-main">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/About">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/Pokemon">Pokemon</Link>
        <Link className="nav-link" to="/Abilities">Abilities</Link>
      </nav>
  
    )
  }

  export default MainNav;