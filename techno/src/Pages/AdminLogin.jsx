import React from 'react'
import './AdminLogin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'

const AdminLogin = () => {
    return (
        <>
            <div className="logo">
            <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="box">
                <form action="">
                    <div className="input">
                        <div className="fav"><FontAwesomeIcon icon={faUser} /></div>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="input">
                        <div className="fav"><FontAwesomeIcon icon={faUnlock} /></div>
                        <input type="password" placeholder="**********" />
                    </div>
                    <div className="content">
                        <div className="c">
                            <input type="checkbox" id="check" />
                            <label for="check"><h4>Remember me</h4></label>
                        </div>
                        <a href="/">Forgot password</a>
                    </div>
                    <input type="submit" id="login" value="LOGIN" />
                </form>
            </div>
        </>
    )
}

export default AdminLogin
