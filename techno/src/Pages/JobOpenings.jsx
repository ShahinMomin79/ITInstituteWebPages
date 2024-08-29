import React from 'react'
import './JobOpenings.css'

const JobOpenings = () => {
  return (
    <div>
       <div class="container">
        <header>
            <h1>MyCompany | Careers</h1>
            <div class="header-buttons">
                <a href="#" class="active">Available Jobs</a>
                <a href="#">Main Site</a>
            </div>
        </header>

        <div class="search-bar">
            <input type="text" placeholder="Job Title"/>
            <select>
                <option>Job Type</option>
                <option>Generic</option>
                <option>Development</option>
                <option>Testing</option>
               
            </select>
            <input type="text" placeholder="Location"/>
            <button>Search</button>
        </div>

        <div class="job-listings">
            <div class="job-card">
                <h2>Senior Software Engineer</h2>
                <div class="job-details">
                    <span>Fulltime</span>
                    <span>Engineering</span>
                    <span>San Francisco</span>
                </div>
                <div class="salary">
                    <span>$60K-100K / Year</span>
                </div>
                <button>Apply Now</button>
            </div>

            <div class="job-card">
                <h2>Junior UI/UX Designer</h2>
                <div class="job-details">
                    <span>Fulltime</span>
                    <span>Design</span>
                    <span>Remote</span>
                </div>
                <div class="salary">
                    <span>$30K-60K / Year</span>
                </div>
                <button>Apply Now</button>
            </div>

            <div class="job-card">
                <h2>Software Developer</h2>
                <div class="job-details">
                    <span>Fulltime</span>
                    <span>Design</span>
                    <span>Remote</span>
                </div>
                <div class="salary">
                    <span>$30K-60K / Year</span>
                </div>
                <button>Apply Now</button>
            </div>

            <div class="job-card">
                <h2>Manual Testing</h2>
                <div class="job-details">
                    <span>Fulltime</span>
                    <span>Design</span>
                    <span>Remote</span>
                </div>
                <div class="salary">
                    <span>$20K-30K / Year</span>
                </div>
                <button>Apply Now</button>
            </div>

            <div class="job-card">
                <h2>Automation Testing</h2>
                <div class="job-details">
                    <span>Fulltime</span>
                    <span>Design</span>
                    <span>Remote</span>
                </div>
                <div class="salary">
                    <span>$40K-60K / Year</span>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default JobOpenings
