import React, { Fragment } from "react";
import { Link, useHistory } from 'react-router-dom';

// import 'courses\src\CSS\CourseStyle.css'
import '../CSS/CourseStyle.css'
import 'https://code.jquery.com/jquery-3.6.0.min.js';
import '../JS/Courses'


const Header = () => {
    return (
        <section id="home">
            <h2>
                Enhance Your Future wiith AspireZ
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsum laboriosam architecto tempora explicabo ratione pariatur accusantium consequatur sed odit?
            </p>
            <div className="btn">
                {/* <a href="courses.html" className="blue">All Courses</a> */}
                <Link to="/courses" className="blue">All Courses</Link>

                <a href="#" className="yellow">My Learning</a>
            </div>
        </section>
    );
}

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="fea-box">
            <i className={icon}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
const Features = () => {
    return (
        <section id="features">
            <h1>Awesome Features</h1>
            <p>Replenish man have thing gathering lights yielding shall you</p>
            <div className="fea-base">
                <FeatureCard icon={"fas fa-graduation-cap"} title={"Scholorship Facility"} description={"One make creepeth, man bearing theira firmament won't great heaven"} />
                <FeatureCard icon={"fas fa-award"} title={"Global Certification"} description={"One make creepeth, man bearing theira firmament won't great heaven"} />
                <FeatureCard icon={"fa-solid fa-clock"} title={"24/7 Mentoring"} description={"One make creepeth, man bearing theira firmament won't great heaven"} />
            </div>
        </section >
    );
}
const Course = ({ image, duration, title, author, entries, price }) => {
    return (
        <div className="courses">
            <img src={`/assets/img/${image}`} alt="" />
            <div className="details">
                <span>Duration:{duration}</span>
                <h6>{title}</h6>
                <span>Author:{author}</span>
                <div className="star">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>

                    <span>({entries})</span>
                </div>
            </div>
            <div className="cost">${price}</div>
        </div>
    )
};
const Expert = ({ image, name, designation, description, facebook, instagram, twitter, linkedin }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div
                className="image-flip"
                ontouchstart="this.classList.toggle('hover');"
            >
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p>
                                    <img
                                        className=" img-fluid"
                                        src={`/assets/img/${image}`}
                                        alt={name}
                                    />
                                </p>
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{designation}</p>
                                <div className="pro-links">
                                    <i className="fab fa-facebook" />
                                    <i className="fab fa-instagram" />
                                    <i className="fab fa-linkedin-in" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="backside">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title">Malika Helper</h4>
                                <p className="card-text">
                                    {description}
                                </p>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon text-xs-center"
                                            target="_blank"
                                            href={facebook}
                                        >
                                            <i className="fab fa-facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon text-xs-center"
                                            target="_blank"
                                            href={instagram}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon text-xs-center"
                                            target="_blank"
                                            href={twitter}
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon text-xs-center"
                                            target="_blank"
                                            href={linkedin}
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const Experts = () => {
    return (
        <section id="team" className="pb-5 ">
            <div className="container">
                <h5 className="section-title h1">Community Experts</h5>
                <div className="row">
                    <Expert image={"pro1.webp"} name={"Malika Helper"} designation={"Full Stack Developer"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} facebook={"https://www.facebook.com/"} instagram={"https://www.instagram.com/"} twitter={"https://twitter.com/"} linkedin={"https://www.linkedin.com/"} />
                    <Expert image={"pro1.webp"} name={"Malika Helper"} designation={"Full Stack Developer"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} facebook={"https://www.facebook.com/"} instagram={"https://www.instagram.com/"} twitter={"https://twitter.com/"} linkedin={"https://www.linkedin.com/"} />
                    <Expert image={"pro1.webp"} name={"Malika Helper"} designation={"Full Stack Developer"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."} facebook={"https://www.facebook.com/"} instagram={"https://www.instagram.com/"} twitter={"https://twitter.com/"} linkedin={"https://www.linkedin.com/"} />

                </div>
            </div>
        </section>

    );
}
const TrendingCourse = ({ course }) => {
    return (
        <section id="course">
            <h1>Trending Courses</h1>
            <p>Replenish man have thing gathering lights yielding shall you</p>
            {/* src\img\c6.jpg */}
            <div className="course-box">
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
                <Course image={'c6.jpg'} duration={"28hr 28min"} author={"Angela Joe"} entries={239} price={49.99} />
            </div>
        </section>
    );
}
const Register = () => {
    return (
        <section id="registration">
            <div className="reminder">
                <p>Get notifications of new courses</p>
                <h1>Stay Updated</h1>
                <div className="time">
                    <div className="date">
                        1800 <br />
                        Enrollments
                    </div>
                    <div className="date">
                        50+ <br /> Courses
                    </div>
                    <div className="date">
                        24/7 <br /> Mentorship
                    </div>
                    <div className="date">
                        100+ <br /> Experts
                    </div>
                </div>
            </div>
            <div className="form">
                <h3>Notify me!</h3>
                <input type="text" placeholder="Name" name="" id="" />
                <input type="email" placeholder="Email ID" name="" id="" />
                <input type="text" placeholder="Contact Number" name="" id="" />
                <div className="btn">
                    <a href="#" className="yellow">
                        Submit
                    </a>
                </div>
            </div>
        </section>

    );
}
const nav = () => {
    return (
        <nav></nav>
    );
}
const Footer = () => {
    <footer></footer>
}
const Home = () => {
    return (
        <>
            <nav />
            <Header />
            <Features />
            <TrendingCourse />
            <Register />
            <Experts />
            <Footer />
        </>
    )
}

export default Home;