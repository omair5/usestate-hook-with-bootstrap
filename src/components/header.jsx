import React from 'react';


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="http://www.google.com">React State</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link" href="http://www.google.com">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://www.google.com">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://www.google.com">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://www.google.com">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;