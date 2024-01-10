import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs(){
    return(
        <div>
            <div>
                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h2>Welcome to ContactUs</h2>
        </div>
    )
}

export default ContactUs