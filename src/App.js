import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashbaord/AdminDashboard';
import ColorScheme from './pages/ColorScheme/ColorScheme';
import ContactUs from './pages/ContactUs/ContactUs';
import CourseDetails from './pages/CourseDetails/CourseDetails';
import CourseDetailsModue from './pages/CourseDetailsModule/CourseDetailsModue';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import Home from './pages/Home/Home';
import SignIn from './pages/SingIn/SignIn';
import SignUp from './pages/SingIn/SignUp';
import StudentDashboar from './pages/studentDashboard/StudentDashboar';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';
function App() {
  return (
    <div>
      <header class="navbar-light navbar-sticky header-static">
        <Navbar />
      </header>
      <Routes>
        <Route path="/admin-dashbaord" element={<AdminDashboard/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/course-details' element={<CourseDetails />} />
        <Route path='/course-details-module' element={<CourseDetailsModue />} />
        <Route path='/course-video-player' element={<VideoPlayer />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/student-dashbaord" element={<StudentDashboar/>}/>
        <Route path="/color-scheme" element={<ColorScheme/>}/>
      </Routes>
    </div>
  );
}

export default App;
