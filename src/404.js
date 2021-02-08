import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you requested is not available</p>
            <Link to='/'>Home</Link>
        </div>
     );
}
 
export default NotFound;