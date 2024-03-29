import {
    createBrowserRouter 
  } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Error from "../Pages/Error";
import ListedBook from "../Pages/ListedBook";
import Home from "../Pages/Home";
import ContactForm from "../Pages/ContactForm";
import Blogs from "../Pages/Blogs";
import BookDetails from "../Pages/BookDetails";
import ReadBook from "../Pages/ReadBook";
import WishList from "../Pages/WishList";
 

export const router = createBrowserRouter([
    {
      path: "/",
      element:  <MainLayOut></MainLayOut>,
      errorElement: <Error></Error>,
      children:[
        {
          path:'/list_book',
          element: <ListedBook></ListedBook>,
          children:[
            {
              index:true,
              element:<ReadBook></ReadBook>
            },
            {
              path:'listofbooks',
              element:<WishList></WishList>,
            }
          ]
        },
        {
          index:true,
          element: <Home></Home>,
          loader: () => fetch('/book_S.json')
        },
        {
          path:'/contact',
          element: <ContactForm></ContactForm> ,
        },
        {
          path:'/blog',
          element: <Blogs></Blogs>,
          loader:() => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path:`/book/:bookId`,
          element: <BookDetails></BookDetails>,
          loader: () => fetch(`/book_S.json`)
        }
      ]
    },
  
  ]);