import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './layout/Home';
import Main from './component/menu/Main';
import Settings from './component/menu/Settings';
import Support from './component/menu/Support';
import About from './component/menu/About';
import Friend from './component/menu/Friend';
import Email from './component/menu/email/Email';
import Albums from './component/menu/albums/Albums';
import PostDetails from './component/menu/postDetails/PostDetails';

const App = () => {

  const route=createBrowserRouter([
      {path:'/',
      element: <Home></Home>,
      children:[
        {path:'/',  element: <Main></Main>},
        {path:'/main',  element: <Main></Main>},
        {path:'/about',  element: <About></About>},
        {path:'/support',  element: <Support></Support>},
        {path:'/friend',
       loader:()=>{
        return fetch('https://jsonplaceholder.typicode.com/users')
       },
        element: <Friend></Friend>},
        {
          path:'/email:emailId',
          loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.emailId}`)
          },
          element:<Email></Email>
        },
        {path:'/album',
        loader: async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/albums`)
        },
        element:<Albums></Albums>},
        {
          path:'/post/:postId',
          loader: async({params})=>{
              return fetch(`https://dummyjson.com/carts/${params.postId}`)
          },
          element:<PostDetails></PostDetails>
        }
        

      ]},
      {path:'/settings',  element: <Settings></Settings>},
      
      {path:'*', element:<div>
        <h1>Data not found please select correct url</h1>
        </div>}
  ])
  return (
    <div className='App'>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
};

export default App;


