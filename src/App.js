import React from "react";
//import { useState } from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Annexure from "./components/Annexure";
import Skills from "./components/Skills";
import Testimonials from './components/Testimonials';
import Contact from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.css';

// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// function App() {
//   const [count, setCount] = useState(0);
//   const router = createBrowserRouter([
    
//     {path: 'nNavbar',
//       element: <><Navbar/><Navbar/></>
//     },
//     {path: '/home',
//       element: <><Home/><Home/></>
//     },
//     {path: '/about',
//       element: <><About/><About/></>
//     },
//     {path: '/annexure',
//       element: <><Annexure/><Annexure/></>
//     },
//     {path: '/skills',
//       element: <><Skills/><Skills/></>
//     },
//     {path: '/portfolio',
//       element: <><Portfolio/><Portfolio/></>
//     },
//     {path: '/testimonials',
//       element: <><Testimonials/><Testimonials/></>
//     },
//     {path: '/contact',
//       element: <><Contact/><Contact/></>
//     },
//   ])
//   return (
//         <>    
//          <RouterProvider router={router} />
//     </>
//   )
// }

// export default App
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Annexure/>  
      <Testimonials/>
      <Contact/>
    
    </div>
  );
}

export default App;
