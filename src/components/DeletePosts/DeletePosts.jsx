import React from 'react';
import { useNavigate } from "react-router-dom";

const DeletePosts = ({idData}) => {

    let navigate = useNavigate();
    const deletePostFetchRequest = () => {
        fetch(`http://localhost:5500/posts/${idData}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((response) => {
            if(response.error) {
                console.log(response.error);
            } else {
                console.log(response)
            }
        })
        navigate('/posts?redirected')
    }


    return (
        <div key={idData}>
            <button onClick={deletePostFetchRequest} className="btn btn-danger col-12 my-2">Supprimer</button>
        </div>
    );
};

export default DeletePosts;