import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'
import Users from '../pages/Users'

export default function Routing() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path = "/" element= {<Dashboard/>} />
                    <Route path="/users" element={<Users/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
            </Router>
        </div>
    )
}

