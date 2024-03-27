import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import Home from './Pages/Home';
import BookDetails from './Pages/BookDetails';
import ListedBooks from './Pages/ListedBooks';
import BooksReads from './components/BooksReads/BooksReads';
import BooksWishlists from './components/BooksWishlists/BooksWishlists';
import PagesToRead from './Pages/PagesToRead';
import MangaSection from './Pages/MangaSection';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('/Books.json')
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<BooksReads></BooksReads>
          },
          {
            path:'wishlists',
            element:<BooksWishlists></BooksWishlists>
          }
        ]
      },
      {
        path:'/chart',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'manga',
        element:<MangaSection></MangaSection>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
