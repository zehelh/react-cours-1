import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeletePosts from '../DeletePosts/DeletePosts';
import { useNavigate } from "react-router-dom";

const GetPosts = () => {

    const [postsData, setPostsData] = useState();
    const [loaded, setLoaded] = useState(false)

    // For refresh after updating components
    let url = window.location.href.split('?')
    let navigate = useNavigate();

    const getPostsData = async () => {
        const response = await fetch('http://localhost:5500/posts')
            .then((response) => response.json());
            console.log(response)
            setPostsData(response)
            setLoaded(true)
    };


    // Quand on redirige avec le param, on redirige a nouveau pour le retirer (rediriger sur la meme page ne fais pas refresh le components)
    if(url[url.length -1] === 'redirected') {
        getPostsData()
        navigate('/posts/')
    }

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