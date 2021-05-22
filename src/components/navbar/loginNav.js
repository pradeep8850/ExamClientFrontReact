import React from 'react';
import { Link } from 'react-router-dom';
class LoginNav extends React.Component{
    render(){
        return (
            <div> 
                <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
            </div>
        )
    }
}

export default LoginNav;