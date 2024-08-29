import React from 'react'
import './StudentLogin.css'
import A from './student.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
// import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

const StudentLogin = () => {
  return (
    <div>
       <div className="container">
        <div className="img"></div>
        <div className="formdata">
            <div className="info">
                <h1>Student Login</h1>
                <p>Hey, enter your details to sign in to your account</p>
            </div>
            <div className="form">
                <form action="">
                    <div className="in">
                        <div className="fav"><FontAwesomeIcon icon={faUser} /></div>
                        <input type="text" placeholder="Enter your username" id="user"/>
                    </div>
                    <div className="in">
                        <div className="fav"><FontAwesomeIcon icon={faUnlock} /></div>
                        <input type="password" placeholder="Enter your password" id="password"/>
                    </div>
                    <div className="text">
                        Having trouble signing in?
                    </div>
                    <div className="in" style={{border:"none"}}>
                        <input type="submit" value="LOGIN IN" className="login"/>
                    </div>
                </form>
            </div>
            <div className="refer">
                <p className="sig">or sign in with</p>
                <button className="btn1"><FontAwesomeIcon icon={faGoogle} />Google</button>
                <button><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</button>
                <p className="sig1">Don't have an account? <a href="/">Sign up now</a></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StudentLogin
