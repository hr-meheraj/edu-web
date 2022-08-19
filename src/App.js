import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './shared/Navbar';
function App() {
  return (
    <div>
      <header class="navbar-light navbar-sticky header-static">
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
