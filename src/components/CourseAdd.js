import Header from './Header';
import Sidebar from './Sidebar';


import React, { useState } from 'react';
import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

const CourseAdd = () => {
  const [weekCount, setWeekCount] = useState(0);

  const addWeek = () => {
    setWeekCount(weekCount + 1);
  };

  const deleteWeek = () => {
    if (weekCount > 0) {
      setWeekCount(weekCount - 1);
    }
  };

  return (
    <div>
   
   <div><Header/></div>
        <div><Sidebar/></div>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="pd-20 card-box mb-15">
              <div className="clearfix">
                <div className="pull-left">
                  <h4 className="text h4">Add Course</h4>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label>Course Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Course Name"
                  />
                </div>
                <div className="form-group">
                  <label>Course Tutor</label>
                  <input
                    className="form-control"
                    placeholder="Enter tutor name"
                    type="text"
                  />
                </div>

                <div className="form-group">
                  <label>Course Description</label>
                  <textarea className="form-control"></textarea>
                </div>

                <div className="form-group">
                  <label>Course Overview</label>
                  <textarea className="form-control"></textarea>
                </div>

                <div className="form-group">
                  <label>Add Course details</label>
                  <div className="form-group" id="week-container">
                    {[...Array(weekCount)].map((_, index) => (
                      <div className="form-group" key={index}>
                        <label>{`Week ${index + 1}:`}</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter title"
                        />
                        <div className="custom-file">
                          <input
                            className="custom-file-input"
                            type="file"
                          />
                          <label className="custom-file-label">
                            Choose file
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="btn btn-primary custom-color"
                  type="button"
                  onClick={addWeek}
                
                >
                  Add
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-primary custom-color"
                  type="button"
                  onClick={deleteWeek}

                >
                  Delete Week
                </button>
                &nbsp;&nbsp;
                <button
                  className="btn btn-primary custom-color"
                  type="button"  
                >
                  Upload Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAdd;
