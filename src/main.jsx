import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import Contacts from "./Component/Contact/Contacts.jsx";
import About from "./Component/About/About.jsx";
import Project from "./Component/Project/Project.jsx";
import DesignProject from "./Component/Project/DesignProject.jsx";
import DeveloperProject from "./Component/Project/DeveloperProject.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Project/>} />
      <Route path="contact" element={<Contacts />} />
      <Route path="design" element={<DesignProject title="design"/>} />
      <Route path="web-development" element={<DeveloperProject title="Web development" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
