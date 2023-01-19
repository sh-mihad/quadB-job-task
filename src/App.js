import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children :[
        {
          path:"/",
          element:<Home/>,
          loader: async()=>fetch("https://api.tvmaze.com/search/shows?q=all") ,
        },
        {
          path:"/movies/:id",
          element:<MovieDetails></MovieDetails>,
          loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
