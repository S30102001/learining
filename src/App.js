import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MeetNadeem from "./pages/MeetNadeem";
import Testimonials from "./pages/Testimonials"
import Conect from "./pages/Conect"
import LifeCourses from "./pages/LifeCourses"
import CoursesSectionv from "./pages/CoursesSectionv"
import StudentBooking from "./pages/StudentBooking"
import Media from "./pages/Media"
import CoursesSection from "./pages/CoursesSection"
// باقي الصفحات

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
          <Route path="/MeetNadeem" element={<MeetNadeem />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Conect" element={<Conect />} />
        <Route path="/Life-Courses" element={<LifeCourses  />} />
        <Route path="/CoursesSectionv" element={<CoursesSectionv  />} />
        <Route path="/StudentBooking" element={<StudentBooking  />} />
        <Route path="/CoursesSection" element={<CoursesSection  />} />
           <Route path="/Media" element={<Media  />} />

        {/* باقي الصفحات */}
      </Routes>
    </div>
  );
}

export default App;
