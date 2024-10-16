import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Principal from './components/Principal.jsx'
import Artista from './components/Artista.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index: true, element: <Principal/>},
      {path:'/artistas/:id', element: <Artista/>},
      {path: '*', element: <h1>PageNotFound</h1>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
