import React from 'react'
import './CourseInfo.css'

const CourseInfo = () => {
  return (
    <div>
       <div class="container">
        <div class="course-header">
            <h1>IT Course Information</h1>
            <p>Learn Java Development,Python Development , Data Science and Data Analytics ,Java Masterclass!</p>
            <div class="course-meta">
                <span>⭐⭐⭐⭐⭐ (15,234 ratings)</span>
                <span>Enrolled: 65,000+ students</span>
                <span>Duration: 5.5 hours</span>
                <span>Last updated: August 2023</span>
            </div>
        </div>

        <div class="course-content">
           
            <div class="course-description">
                <div class="tabs">
                    <button class="tab-button active">Overview</button>
                    <button class="tab-button">Curriculum</button>
                    <button class="tab-button">Instructor</button>
                    <button class="tab-button">Reviews</button>
                </div>

                <div class="description">
                    <h2>Java FullStack Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum erat at augue ultricies, ac pharetra magna suscipit.</p>
                    <ul>
                        <li>Front End</li>
                       
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>React JS</li>
                        
                    </ol>
                    <li>Core Java</li>
                    <ol>
                        <li>Basics of Java</li>
                        <li>Operators</li>
                        <li>Decision Making Statements</li>
                        <li>Looping Statements</li>
                        <li>Methods</li>
                        <li>Static Members</li>
                        <li>Non static Members</li>
                        <li>Constructor</li>
                        <li>OOps</li>
                        <li>Encapsulation</li>
                        <li>Polymorphism</li>
                        <li>Inheritance</li>
                        <li>Abstraction</li>
                        <li>Collection Framework</li>
                        <li>Exception Handling</li>
                        <li>Object</li>
                        <li>Interface</li>
                        <li>Multithreading</li>
                    </ol>
                    <li>Advance Java</li>
                    <ol>
                        <li>File Handling</li>
                        <li>JDBC</li>
                        <li>Hibernate</li>
                        <li>Servlet</li>
                        <li>JSP</li>
                        <li>Spring Framework</li>
                    </ol>
                </ul>
                    <h2>Certification</h2>
                    <p>Upon successful completion of this course, you will receive a certificate of completion.</p>
                </div>
            </div>

           
            <div class="course-pricing">
                <div class="price">
                    <span>$49.65</span>
                    <span class="original-price">$99.99</span>
                    <span class="discount">50% Off</span>
                </div>
                <button class="buy-now">Buy Now</button>
                <p class="money-back">30-day money-back guarantee</p>

                <div class="course-includes">
                    <h3>This course includes:</h3>
                    <ul>
                        <li>Language: English</li>
                        <li>On-demand video, articles, and resources</li>
                        <li>Full lifetime access</li>
                        <li>Certificate of completion</li>
                    </ul>
                </div>

                <div class="group-training">
                    <p>Training for 5 or more people?</p>
                    <a href="#">Contact our sales team</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CourseInfo
