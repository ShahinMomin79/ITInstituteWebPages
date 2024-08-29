// Dashboard.js
import React from 'react';
import './StudentPortal.css';

const StudentPortal = () => {
    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="profile-section">
                    <img src="profile-placeholder.png" alt="Profile" />
                    <h3>John Doe</h3>
                    <p>3rd year</p>
                </div>
                <nav>
                    <ul>
                        <li className="active">Dashboard</li>
                        <li>Payment Info</li>
                        <li>Registration</li>
                        <li>Courses</li>
                        <li>Drop Semester</li>
                        <li>Result</li>
                        <li>Notice</li>
                        <li>Schedule</li>
                    </ul>
                </nav>
                <button className="logout-button">Logout</button>
            </aside>

            <main className="main-content">
                <header className="header">
                    <input type="text" placeholder="Search" />
                    <h1>Welcome back, John!</h1>
                    <p>Always stay updated in your student portal</p>
                </header>

                <section className="finance-section">
                    <h2>Finance</h2>
                    <div className="finance-cards">
                        <div className="finance-card">
                            <h3>$10,000</h3>
                            <p>Total Payable</p>
                        </div>
                        <div className="finance-card">
                            <h3>$5,000</h3>
                            <p>Total Paid</p>
                        </div>
                        <div className="finance-card">
                            <h3>$300</h3>
                            <p>Others</p>
                        </div>
                    </div>
                </section>

                <section className="courses-section">
                    <h2>Enrolled Courses</h2>
                    <div className="course-card">
                        <p>Object oriented programming</p>
                        <button>View</button>
                    </div>
                    <div className="course-card">
                        <p>Fundamentals of database systems</p>
                        <button>View</button>
                    </div>
                </section>

                <section className="instructors-section">
                    <h2>Course Instructors</h2>
                    <div className="instructors">
                        <img src="instructor-placeholder.png" alt="Instructor" />
                        <img src="instructor-placeholder.png" alt="Instructor" />
                        <img src="instructor-placeholder.png" alt="Instructor" />
                    </div>
                </section>

                <section className="notice-section">
                    <h2>Daily notice</h2>
                    <p><strong>Prelim payment due:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p><strong>Exam schedule:</strong> Nunc vulputate libero et velit interdum.</p>
                </section>
            </main>
        </div>
    );
};

export default StudentPortal;
