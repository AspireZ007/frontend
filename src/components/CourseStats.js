import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import CourseTableRow from './CourseTableRow';

import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

const widgetData = [
    { count: 75, label: 'Total Courses Uploaded', icon: 'dw dw-book' },
    { count: 400, label: 'Students Enrolled', icon: 'icon-copy fa fa-users' },
    // Add more objects for additional widgets
    { count: 50000, label: 'Total Earnings', icon: 'icon-copy fa fa-graduation-cap' },
  ];
  

  const courseEntries = [
    { name: 'React Js for Beginners', duration: '23 hr 15 min', uploadDate: '2023-05-15', enrollments: 250, rating: 4.5 },
    { name: 'Node.js Advanced Concepts', duration: '18 hr 30 min', uploadDate: '2023-05-10', enrollments: 180, rating: 4.2 },
    // Add more course entries as needed
  ];
  

const CourseStats = () => {
  return (
    <div >
        <div><Header/></div>
        <div><Sidebar/></div>

  
    <div className="main-container">
      <div className="xs-pd-20-10 pd-ltr-20">
        <div className="title pb-20">
          <h2 className="h3 mb-0">Course Statistics</h2>
        </div>

        <div className="row pb-10">
    {widgetData.map((widget, index) => (
      <Widget
        key={index}
        count={widget.count}
        label={widget.label}
        icon={widget.icon}
      />
    ))}


   </div>

        <div className="card-box pb-10">
          <div className="h5 pd-20 mb-0">Courses Dashboard</div>
          <table className="data-table table nowrap">
            <thead>
              <tr>
                <th className="table-plus">Name of the Course</th>
                <th>Duration</th>
                <th>Date of Upload</th>
                <th>Enrollments</th>
                <th>Rating</th>
                <th className="datatable-nosort">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courseEntries.map((entry, index) => (
                <CourseTableRow
                  key={index}
                  name={entry.name}
                  duration={entry.duration}
                  uploadDate={entry.uploadDate}
                  enrollments={entry.enrollments}
                  rating={entry.rating}
                />
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseStats;