import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    return (
        <div>
            <Link to="surveys/new">
                <button className="fixed-button wobble" type="button">
                    <i className="fa fa-plus"></i>
                </button>
            </Link>
        </div>
    );
};

export default Dashboard;