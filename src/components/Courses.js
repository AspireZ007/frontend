import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../CSS/CourseDescription.css';
import { Link, useHistory } from 'react-router-dom';


const CourseCard = ({ course }) => {
  const history = useHistory();
  const handleButtonClick = (id) => {
    history.push(`/courseDetails/${id}`); // Replace with the desired path and ID parameter
  };

  const source = `/assets/img/${course.image}`;

  return (
    <div key={course.index} className="courses" onClick={() => handleButtonClick(course.id)}>
      <img src={source} alt="" />
      <div className="details">
        <span>{course.duration}</span>
        <h6>{course.title}</h6>
        <span>Author: {course.author}</span>
        <div className="star">
          {Array.from({ length: course.rating }, (_, index) => (
            <FontAwesomeIcon key={course.index} icon={faStar} />
          ))}
          <span className="review">({course.reviews})</span>
        </div>
      </div>
      <div className="cost">{course.price}</div>
    </div>
  );
};
const Course = () => {
  const courses = [
    {
      id: 1,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 5,
      reviews: 239,
      price: '$49.99'
    },
    {
      id: 2,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 4,
      reviews: 239,
      price: '$49.99'
    },
    {
      id: 3,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 5,
      reviews: 239,
      price: '$49.99'
    },
    {
      id: 4,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 5,
      reviews: 239,
      price: '$49.99'
    },
    {
      id: 5,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 5,
      reviews: 239,
      price: '$49.99'
    },
    {
      id: 6,
      image: 'c1.jpg',
      duration: 'Duration: 28hrs 30mins',
      title: 'JavaScript Beginners Course',
      author: 'Charis',
      rating: 5,
      reviews: 239,
      price: '$49.99'
    }
  ];
  return (
    <div className = "all-courses">
      <section id="course">
        <h1>All Courses</h1>
        <p>Replenish man have thing gathering lights yielding shall you</p>
        <div className="course-box">
          {courses.map((course) => (
            // <Course courses={course} />
            <CourseCard course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default Course;