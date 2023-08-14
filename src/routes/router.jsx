import { v4 as uuidv4 } from 'uuid';
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Contact from '../pages/Contact/index'
import Blog from '../pages/Blog/index'
import ErrorPage from '../pages/ErrorPage/index'

export const routes = [
    {
        id: uuidv4(),
        path: "/",
        extract: true,
        element: <Home />
    },
    {
        id: uuidv4(),
        path: "/about",
        extract: false,
        element: <About />
    },
    {
        id: uuidv4(),
        path: "/contact",
        extract: false,
        element: <Contact />
    },
    {
        id: uuidv4(),
        path: "/blog",
        extract: false,
        element: <Blog />
    },
    {
        id: uuidv4(),
        path: "*",
        extract: false,
        element: <ErrorPage/>
    }
]