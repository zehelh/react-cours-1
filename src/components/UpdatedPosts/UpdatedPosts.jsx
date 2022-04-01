import React, { useState } from 'react';

const UpdatedPosts = ({ idData, authorData, messageData }) => {

    const [author, setAuthor] = useState();
    const [message, setMessage] = useState();

    const onClickPost = () => {
        updatePostFetchRequest()
    };


    const data = {
        author: author,
        message: message
    };

    const updatePostFetchRequest = () => {
        fetch(`http://localhost:5500/posts/${idData}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.error) {
                console.log(response.error);
            } else {
                console.log(response)
            }
        })
    }

    const handlePost = (e) => {
        if(e === 'Enter') {
            updatePostFetchRequest()
        }
    }


    return (
        <div key={idData}>
            <form action="">
                <label htmlFor="author" className='form-label'>Author</label>
                <input type="text" placeholder={authorData} onChange={(e) => setAuthor(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="message" className='form-label'>Message</label>
                <input type="text" placeholder={messageData} onChange={(e) => setMessage(e.target.value)} className='form-control' onKeyDown={(e) => handlePost(e.key)} />
                <button type="button" onClick={() => onClickPost()} className='btn btn-primary my-2 col-12'>Updated posts</button>
            </form>
        </div>
    );
};

export default UpdatedPosts;