import React from 'react';
import reactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import Posts from './pages/Posts/Posts';
import NewPosts from './pages/NewPosts/NewPosts';
import ShowPost from './pages/Post/Post';

const App = () => {
    return (
      <>
        <h1 className='text-center'>1st React App</h1>
        <div className='d-flex justify-content-center'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react logo" className='col-6' />
        </div>
      </>
    );
};

reactDom.render(

  <Router>

    <Navbar/>

    <div className='container-fluid pt-4'>
      <Routes>

        <Route path='/' element={<App/>}/>
        <Route path='/posts' element={ <Posts/> }/>
        <Route path='/posts/new' element={<NewPosts/>}/>
        <Route path='/post/:id' element={<ShowPost/>}/>

      </Routes>
    </div>

  </Router>,
  document.getElementById('root'));