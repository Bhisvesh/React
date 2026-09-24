import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./Layout.jsx";
import { About, Contact, Home, User, Github} from "./components/index.js";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path:"",
//         element : <Home/>
//       },
//       {
//         path:"about",
//         element : <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<About />} />
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      path="github" 
      element={<Github />} 
      loader={async () => {
       const response = await fetch('https://api.github.com/users/Bhisvesh');
      return response.json();
  }} 
/>
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
