// * import React & libs
import { Fragment } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// * import components (default)
import App from "./App.jsx"
import Navbar from "./components/Navbar.jsx"
import About from "./components/page/About.jsx"
import Profile from "./components/page/Profile.jsx"
import Education from "./components/page/Education.jsx"
import Contact from "./components/page/Contact.jsx"
import NotFound from "./components/error/NotFound.jsx"

// * import style
import "./style/scss/_main.scss"
import "./style/scss/_pages.scss"
import "./style/scss/_navbar.scss"
import "./style/scss/_about.scss"
import "./style/scss/_education.scss"
import "./style/scss/_footer.scss"
import "./style/scss/_icon.scss"

import fetchAPI from "./data/api.js"
const data = fetchAPI();

const routes = [
  {
    path: "/",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <App PropApp={data}/>
      </section>
    ),
  },
  {
    path: "/about",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <About PropAbout={data}/>
      </section>
    ),
  },
  {
    path: "/profile",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <Profile PropProfile={data}/>
      </section>
    ),
  },
  {
    path: "/education",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <Education PropEducation={data}/>
      </section>
    ),
  },
  {
    path: "/contact",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <Contact PropContact={data}/>
      </section>
    ),
  },
  {
    path: "*",
    element: (
      <section className="App">
        <Navbar PropNav={data}/>
        <NotFound />
      </section>
    ),
    errorElement: <NotFound />,
  },
];

const router = createBrowserRouter([...routes]);
const rootEL = document.querySelector("#root");
const app = ReactDOM.createRoot(rootEL);

app.render(
  <Fragment>
    <RouterProvider router={router} />
  </Fragment>
);