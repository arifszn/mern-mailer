import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import SurveyList from './SurveyList';

const Dashboard = (props) => {
    return (
        <div>
            <SurveyList/>
            <Link to="surveys/new">
                <button className="fixed-button wobble" type="button">
                    <i className="fa fa-plus"></i>
                </button>
            </Link>
        </div>
    );
};

export default Dashboard;