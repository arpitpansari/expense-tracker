import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Expense Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">DashBoard</Link>
                            </li>

                            {/* <li className="nav-item mx-2">
                            <Link className="nav-link" to="/About">{props.aboutText}</Link>
                        </li> */}
                        </ul>
                        <div className="form-check form-switch mx-3">
                            {/* <Link style={{ float: 'right' }} className="nav-link active" aria-current="page" to="/login">Login</Link>
                            <Link style={{ float: 'right' }} className="nav-link active" aria-current="page" to="/signup">Signup</Link> */}
                            <label style={{marginRight: '2rem', marginTop:'8px'}} className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Dark Mode</label>
                            <input style={{marginTop:'13px'}} onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
