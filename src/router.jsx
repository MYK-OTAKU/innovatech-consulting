import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'a-propos', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'temoignages', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
