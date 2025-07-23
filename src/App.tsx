import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import WeatherForecast from './pages/WeatherForecast'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/weatherforecast" className="hover:underline">Weather Forecast</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weatherforecast" element={<WeatherForecast />} />
      </Routes>
    </div>
  )
}