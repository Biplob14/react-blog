import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to = "/">
                <img src="logo.png" width="70px" alt=""/>
            </Link>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to = "/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;