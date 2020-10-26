import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link"  to='/'>Home</Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link"  to='/list'>Lista de usuarios</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navigation;
