import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./Nav";
import MenuPage from "./Pages/MenuPage";
import ProfilePage from "./Pages/ProfilePage";
import FeedPage from "./Pages/FeedPage";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import JobsPage from "./Pages/JobsPage";
import MessagePage from "./Pages/MessagePage";
import PostPage from "./Pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "jobs",
    element: <JobsPage />,
  },
  {
    path: "feed",
    element: <FeedPage />,
  },
  {
    path: "menu",
    element: <MenuPage />,
  },
  {
    path: "post",
    element: <PostPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <createBrowserRouter>
      <RouterProvider router={router} />
    </createBrowserRouter>
  </React.StrictMode>
);
