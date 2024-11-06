import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import BookDetail from './components/BookDetails.jsx';
import BrowseBook from './components/BrowseBooks.jsx';
import AddBook from './components/AddBook.jsx';
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/bookDetail/:id",
        element: <BookDetail />
      },
      {
        path: "/browsebook",
        element: <BrowseBook />
      },
      {
        path: "/browsebook/:category",
        element: <BrowseBook />
      },
      {
        path: "/addbook",
        element: <AddBook />
      },
    ],

     errorElement: <Error />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
