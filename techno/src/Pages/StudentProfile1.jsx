// Dashboard.js
import React from 'react';
import './StudentProfile1.css';
import { FaUserCircle, FaStar, FaChalkboardTeacher } from 'react-icons/fa';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const StudentProfile1 = () => {
    const radarData = {
        labels: ['Java', 'SQL', 'HTML', 'React', 'Javascript'],
        datasets: [
            {
                label: 'Soft Skill Level',
                data: [4.5, 3.5, 2, 4, 3],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <FaUserCircle size={50} />
                <h3>Shahin Momin</h3>
                <p>s@1234</p>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>About me</li>
                        <li>Ongoing Studies</li>
                        <li>Hobbies</li>
                        <li>PortFolio</li>
                        <li>Settings</li>
                    </ul>
                </nav>
                <button className="logout-button">Log Out</button>
            </aside>

            <main className="main-content">
                <section className="profile-section">
                    <h2>Shahin Momin</h2>
                    <p>Date of Birth: 28 December 2004</p>
                    <p>Email: smomin201819@gmail.com</p>
                    <p>Mobile no: 9567899***</p>
                    <p>Location: Shivajinagar Pune</p>
                    <p>Course: Java Full Stack Development Course</p>
                </section>

                <section className="skills-attendance">
                    <div className="skills-chart">
                        <Radar data={radarData} />
                    </div>
                    <div className="attendance-chart">
                        {/* Add your attendance chart here */}
                        <p>Attendance Chart Placeholder</p>
                    </div>
                </section>

                <section className="tests-courses">
                    <div className="tests">
                        <h3>Test Given</h3>
                        <p>Total 30</p>
                        <p><span className="mock-test">Mock Test</span> | <span className="assignment">Assignment</span></p>
                    </div>

                    <div className="ongoing-courses">
                        <h3>Ongoing courses list here</h3>
                        <ul>
                            <li>Front End (1 March 2023 - 1 April 2023): <span className="completed">completed</span></li>
                            <li>Core Java (14 March 2023 - 14 June 2023): <span className="inProcess">inProcess</span></li>
                            <li>Advance Java (8 Feb 2023 - 8 April 2023): <span className="incomplete">incomplete</span></li>
                        </ul>
                    </div>
                </section>

                <section className="teachers-rewards">
                    <div className="teachers">
                        <h3>Teachers</h3>
                        <p><FaChalkboardTeacher /> Vaishanvi V.</p>
                        <p><FaChalkboardTeacher /> Pranali R.</p>
                    </div>

                    <div className="rewards">
                        <h3>Reward</h3>
                        <p><FaStar /> Top Scorer</p>
                        <p><FaStar /> Perfect Attendance</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default StudentProfile1;
