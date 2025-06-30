import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) // main.jsx




// A component in React is a reusable, self-contained piece of UI that can be independently used and managed. Components break down a web application into small, manageable parts.
// In React, everything is a component!

// React mein component ek aisa code ka hissa hota hai jo apne aap mein ek chhota, independent unit hota hai, aur kisi bhi user interface (UI) ko build karne ke liye use hota hai. Component ke andar aap kaafi cheezein define kar sakte ho, jaise layout, design, behavior, aur logic, jo ek specific part ke liye zaroori hoti hain. 