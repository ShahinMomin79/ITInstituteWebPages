import React from 'react';
import './StudentProfile.css'
import a from './p.jpg'
import teacher from './teacher.png'
import star from './star.png'

//importing for skill chart
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement,Filler,BarElement,Title, Tooltip, Legend ,CategoryScale,LinearScale} from 'chart.js';


//importing for bar diagram
import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


const StudentProfile = () => {
  //data for skill chart
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

 // Data for the bar chart
 const data = {
  labels: ['Core Java', 'Advance Java', 'FrontEnd', 'Concept Building'],
  datasets: [
    {
      label: 'Attendance',
      data: [60, 70, 80, 90], // Example attendance values
      backgroundColor: ['#ff9999', '#66b3ff', '#ffcc99', '#c2c2f0'],
      borderWidth: 1,
    },
  ],
};

// Options for the bar chart
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Attendance',
    },
  },
};
  
  return (  <>
       <div className="container">
        <div className="sidebar">
            <div className="profile">
                <img src={a} alt="Profile Picture"/>
                <h2>Shahin Momin</h2>
                <p>s@1234</p>
            </div>
            <nav className="menu">
                <a href="#">Dashboard</a>
                <a href="#">About me</a>
                <a href="#">Ongoing Studies</a>
                <a href="#">Hobbies</a>
                <div className="preferences">
                    <a href="#">PortFolio</a>
                    <a href="#">Settings</a>
                </div>
                <button className="logout">Log Out</button>
            </nav>
        </div>

        <div className="main-content">
            <div className="top-section">
                <div className="card soft-skill">
                    <h3>Soft Skill</h3>
                    <Radar data={radarData} />
                </div>
                <div className="card bidang-minat">
                    <h3>Attendance</h3>
                    <Bar data={data} options={options} />
                </div>
                <div className="card profile-info">
                    <h3>Shahin Momin</h3>
                    <p><strong>Date of Birth:</strong> 28 December 2004</p>
                    <p><strong>Gmail:</strong> smomin201819@gmail.com</p>
                    <p><strong>Mobile no:</strong>9567899***</p>
                    <p><strong>location:</strong> Shivajinagar pune...</p>
                    <p><strong>course:</strong> Java Full stack Development Course</p>
                </div>
            </div>

            <div className="bottom-section">
                <div className="card waktu-belajar">
                    <h3>Test Given</h3>
                    <div className="learning-time-content">
                        <div className="learning-time-chart">
                            <svg>
                                <circle cx="50" cy="50" r="45"></circle>
                                <circle cx="50" cy="50" r="45"></circle>
                            </svg>
                            <div className="learning-time-text">
                                <span>Total</span>
                                <h4>30</h4>
                            </div>
                        </div>
                        <div className="learning-modes">
                            <div className="mode-item">
                                <span className="dot dot-offline"></span>
                                <p>Mock Test</p>
                            </div>
                            <div className="mode-item">
                                <span className="dot dot-online"></span>
                                <p>Assignment</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="card sedang-berlangsung">
                    <h3>Ongoing courses list here</h3>
                  
    <ul className="courses-list">
        <li className="course-item">
            <div className="course-info">
                <h4>Front End</h4>
                <p>1 March 2023 - 1 April 2023</p>
            </div>
            <a href="#" className="course-link">completed</a>
        </li>
        <li className="course-item">
            <div className="course-info">
                <h4>Core Java</h4>
                <p>14 March 2023 - 14 June 2023</p>
            </div>
            <a href="#" className="course-link">inProcess</a>
        </li>
        <li className="course-item">
            <div className="course-info">
                <h4>Advance Java</h4>
                <p>8 Feb 2023 - 8 April 2023</p>
            </div>
            <a href="#" className="course-link">incomplete</a>
        </li>
       
    </ul>
                </div>
                <div className="card riwayat-pengajar">
                    <h3>Teachers</h3>
                    <div className="teacher-history-grid">
                        <div className="teacher-item">
                            <img src={teacher} alt="Teacher 3"/>
                            <p>vaishanvi V.</p>
                        </div>
                        <div className="teacher-item">
                            <img src={teacher} alt="Teacher 4"/>
                            <p>Pranali R.</p>
                        </div>
                    </div>
                    <div className="card reward">

                        <h3>Reward</h3>
                        <div className="rewards-grid">
                            <div className="reward-item">
                                <img src={star} alt="Reward 1"/>
                                <p>Top Scorer</p>
                            </div>
                            <div className="reward-item">
                                <img src={star} alt="Reward 2"/>
                                <p>Perfect Attendance</p>
                            </div>
                            <div className="reward-item">
                                <img src={star} alt="Reward 3"/>
                                <p>Best Project</p>
                            </div>
                            <div className="reward-item">
                                <img src={star} alt="Reward 4"/>
                                <p>Star Student</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
          
    
    </div>
    </>
  )

 
}

export default StudentProfile
