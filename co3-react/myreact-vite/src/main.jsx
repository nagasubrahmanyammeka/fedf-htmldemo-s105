import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import ChildToParentState from './ChildToParentState.jsx'
import ReduxDemo from './ReduxDemo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxDemo />
  </StrictMode>,
)
