import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <img src="https://www.shoppersstop.com/_ui/updated_path/images/newLogo.svg"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Pricing</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <Link className="nav-link active" aria-current="page" to="/Login">Log In</Link>
                            <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;