import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatorPage from './pages/CreatorPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/c/:address" element={<CreatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;