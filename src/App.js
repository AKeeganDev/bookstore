import { Routes, Route } from 'react-router-dom';
import Bookshelf from './pages/Bookshelf';
import CheckStatus from './pages/CheckStatus';
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="body">
      <NavBar />
      <Routes>
        <Route path="/bookstore" element={<Bookshelf />} />
        <Route path="/status" element={<CheckStatus />} />
      </Routes>
    </div>
  );
}

export default App;
