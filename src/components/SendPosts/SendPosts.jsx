import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SendPosts = () => {

    const [author, setAuthor] = useState();
    const [message, setMessage] = useState();
    let navigate = useNavigate();

    const onClickPost = () => {
        createPostFetchRequest()
    }


    const data = {
        author: author,
        message: message
      };

    const createPostFetchRequest = () => {
        fetch('http://localhost:5500/posts', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.error) {
                console.log(response);
            } else {
                console.log(response)
            }
            navigate('/post/' + response._id)
        })
    }

    const handlePost = (e) => {
        if(e === 'Enter') {
            createPostFetchRequest()
        }
    }

    return (
        <div className='card card-body'>
            <form action="">
                <label htmlFor="author" className='form-label'>Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="message" className='form-label'>Message</label>
                <input type="text"  value={message} onChange={(e) => setMessage(e.target.value)} className='form-control' onKeyDown={(e) => handlePost(e.key)} />
                <button type="button" onClick={() => onClickPost()} className='btn btn-primary mt-3 col-12'>Create post</button>        

            </form>
        </div>
    );
};

export default SendPosts;