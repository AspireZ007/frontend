// import './App.css';
import { Route, Switch } from 'react-router-dom';
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
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/courseDetails/:id" component={Description} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path='/courses/:id' component={CourseDashboard} />
        <Route exact path='/enroll/courses/:id' component={EnrollCourse} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/connections' component={Connections} />
        <Route path="/courseadd" component={CourseAdd} />
        <Route path="/profile" component={Profile} />
        <Route path="/coursestats" component={CourseStats} />
        <Route path="/chatting" component={Chatting} />
        

        {/* <Route exact path='/feed' component={Feed} /> */}
      </Switch>
    </>
  );
}

export default App;
