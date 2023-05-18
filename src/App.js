// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Header from './Header/Header';
import Features from './Features/Features';
import Shopping from './Shopping/Shopping';
import Contact from './Contact/Contact';
import Main from './Layout/Main';
import Friends from './Friends/Friends';
import FriendDetails from './FriendDetails/FriendDetails';
import Posts from './Posts/Posts';
import PostDetails from './PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/features', element: <Features></Features> },

        { path: '/shopping', element: <Shopping></Shopping> },
        {
          path: '/friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')

          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/friend/friendId',
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
        element: <Posts></Posts>
        },
        {
          path:'/post/:postId',
          loader: async ({ params })=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }

      ]
    },
    { path: '/Home', element: <Home></Home> },
    { path: '/About', element: <About></About> },

    { path: '/Contact', element: <Contact></Contact> },

    { path: '/*', element: <div>hello world</div> },
  ])
  return (
    <div className="App">
      {/* <Header>
      </Header> */}
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
