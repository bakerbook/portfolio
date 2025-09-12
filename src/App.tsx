import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home"

function App() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Analytics />
        </Router>
    )
}

export default App 