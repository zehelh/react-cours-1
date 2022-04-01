import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePosts from '../DeletePosts/DeletePosts';

const GetPosts = () => {

    const [postsData, setPostsData] = useState();
    const [loaded, setLoaded] = useState(false)

    const getPostsData = async () => {
        const response = await fetch('http://localhost:5500/posts')
            .then((response) => response.json());
            console.log(response)
            setPostsData(response)
            setLoaded(true)
    };


    useEffect(() => {
        getPostsData()
    }, [setPostsData])
 

    return (
        <div className='d-flex flex-wrap justify-content-between'>
            {loaded && postsData.map(post => {
              return(
                <div className='col-5 my-4 card card-body text-center' key={post._id}>
                    <p>{post.author}</p>
                    <p>{post.message}</p>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                    <Link to={`/post/${post._id}`} state={{post: post}} className='btn btn-primary'>Voir</Link>
                    <DeletePosts idData={post._id} />
                </div>
              )
            })}
        </div>
    );
};

export default GetPosts;