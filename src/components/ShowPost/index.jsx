import DeletePosts from '../DeletePosts/DeletePosts';
import UpdatedPosts from '../UpdatedPosts/UpdatedPosts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



const ShowPost = () => {

    const [postData, setPostData] = useState();
    const [loaded, setLoaded] = useState(false);

    // For refresh after updating components
    let url = window.location.href.split('?')
    let location = useParams();
    let navigate = useNavigate();
    
    const getPostData = async () => {
        const response = await 
        fetch(`http://localhost:5500/posts/${location.id}`)
            .then((response) => response.json());
            console.log(response)
            setPostData(response)
            setLoaded(true)
    };

    // Quand on redirige avec le param, on redirige a nouveau pour le retirer (rediriger sur la meme page ne fais pas refresh le components)
    if(url[url.length -1] === 'redirected') {
        getPostData()
        navigate('/post/' + location.id)
    }


    useEffect(() => {
        getPostData()
    }, [setPostData])

    if(loaded && postData) {
        return (
            <div>
                <div className='col-12 my-4 card card-body text-center' key={postData._id}>
                    <p>{postData.author}</p>
                    <p>{postData.message}</p>
                    <p>{new Date(postData.date).toLocaleDateString()}</p>
                    <UpdatedPosts idData={postData._id} authorData={postData.author} messageData={postData.message}/>
                    <DeletePosts idData={postData._id} />
                </div>
            </div>
        );
    }
};

export default ShowPost;