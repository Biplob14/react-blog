import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum ammet....', author: 'mario', id: 1},
        { title: 'Welcome to my blog site', body: 'lorem ipsum ammet....', author: 'mario', id: 2},
        { title: 'Web development practice blog', body: 'lorem ipsum ammet....', author: 'mario', id: 3},
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "Blog Archive"/>
        </div>
     );
}
 
export default Home;