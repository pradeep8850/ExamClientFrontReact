import React from 'react';
import Register from '../register/register';
import { Link } from 'react-router-dom';


class RegisterNav extends React.Component {
    render() {
        return (
            <div>
                <Link to="/register" className="nav-link">Register</Link>
            </div>
        )
    }
}

export default RegisterNav;