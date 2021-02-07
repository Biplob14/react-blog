import { useState, useEffect } from 'react';

const UseFetch = (url) => {
    
    // creating state for features
    const [data, setData] = useState(null);
    // loading state
    const [isPending, setIsPending] = useState(true);
    // error state
    const [error, setError] = useState(null);
    // get data from json through hook
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch the data for that resource")
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setError(null);
                
            })
    }, [url]);
    return { data, isPending, error }
}

export default UseFetch;