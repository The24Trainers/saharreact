import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './componets/header/Header'
import Footer from './componets/footer/Footer'

import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
)
