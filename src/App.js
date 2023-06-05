// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Description from './components/Description';
import Courses from './components/Courses';
import CourseDashboard from './components/CourseDashboard';
import EnrollCourse from './components/EnrollCourse';
import Login from './components/Login';
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
      </Switch>
    </>
  );
}

export default App;
