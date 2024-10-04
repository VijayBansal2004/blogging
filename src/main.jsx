import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogContextProvider } from './context/BlogContextProvider.jsx'


createRoot(document.getElementById('root')).render(
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
)
