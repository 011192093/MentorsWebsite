import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Contact from "./components/contact/Contact";
import Test from "./components/testimonials/Test";
import Media from "./components/media/Media";
import Blog from "./components/blog/Blog";
import Section from "./components/Section/Section";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
          
        },
        {
          path: "/about",
          element: <Section></Section>,
          
          
        },
        {
          path: "/test",
          element: <Test></Test>,
          
        },
        {
          path: "/media",
          element: <Media></Media>,
          
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
          
        },
        

      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
