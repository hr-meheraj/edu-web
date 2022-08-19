import { Routes, Route } from 'react-router-dom'
import CourseDetails from './pages/CourseDetails/CourseDetails';
import Home from './pages/Home/Home';
import Navbar from './shared/Navbar';
function App() {
  return (
    <div>
      <header class="navbar-light navbar-sticky header-static">
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-details' element={<CourseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
