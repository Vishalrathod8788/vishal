import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/about",
          element: <About />
        }, {
          path: "/projects",
          element: <Projects />
        }, {
          path: "/blog",
          element: <Blog />
        }, {
          path: "/blog/:slug",
          element: <BlogPost />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
};

export default App;