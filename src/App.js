// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './components/Home';
import Description from './components/Description';
import Courses from './components/Courses';
import CourseDashboard from './components/CourseDashboard';
import EnrollCourse from './components/EnrollCourse';
import Login from './components/Login';
import Connections from './components/Connections';
import CourseAdd from './components/CourseAdd';
import Profile from './components/Profile';
import CourseStats from './components/CourseStats';
import Chatting from './components/Chatting';
// import Feed from './components/Feed';
function App() {

  return (
    // <>
    //   <Switch>
    //     <Route exact path='/' component={Home} />
    //     <Route exact path="/courseDetails/:id" component={Description} />
    //     <Route exact path="/courses" component={Courses} />
    //     <Route exact path='/courses/:id' component={CourseDashboard} />
    //     <Route exact path='/enroll/courses/:id' component={EnrollCourse} />
    //     <Route exact path='/login' component={Login} />
    //     <Route exact path='/connections' component={Connections} />
    //     <Route path="/courseadd" component={CourseAdd} />
    //     <Route path="/profile" component={Profile} />
    //     <Route path="/coursestats" component={CourseStats} />
    //     <Route path="/chatting" component={Chatting} />
        

    //     {/* <Route exact path='/feed' component={Feed} /> */}
    //   </Switch>
    // </>
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/courseDetails/:id" element={<Description />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path='/courses/:id' element={<CourseDashboard />} />
          <Route exact path='/enroll/courses/:id' element={<EnrollCourse />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/connections' element={<Connections />} />
          <Route path="/courseadd" element={<CourseAdd />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coursestats" element={<CourseStats />} />
          <Route path="/chatting" element={<Chatting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
