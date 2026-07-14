import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-5 text-dark" to="/" style={{ letterSpacing: '-0.02em' }}>
                        Hackathon <span className="text-dark fw-bold">Team Management</span> {/* Or just " Hub" */}
                    </Link>

                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-collapse="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-3 mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="btn btn-dark btn-sm px-3 py-2 fw-medium" to="/">
                                    Add Team
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="btn btn-dark btn-sm px-3 py-2 fw-medium" to="/view">
                                    View Teams
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar