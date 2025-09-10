import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"
import Womble from "./pages/Womble"

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/womble" element={<Womble />} />
                </Routes>
                <Analytics />
        </Router>
    )
}

export default App 