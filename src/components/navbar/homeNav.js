import React from 'react';
import { Link } from 'react-router-dom';
class HomeNav extends React.Component {
    render() {
        return (
            <div>
                <Link to="" className="nav-link active" aria-current="page">Exam Portal</Link>
            </div>
        )
    }
}

export default HomeNav;