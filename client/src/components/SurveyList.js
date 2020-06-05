import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions/index';

const SurveyList = (props) => {
    useEffect(() => {
        props.fetchSurveys();       
    }, []);

    const renderSurvey = () =>{
        return props.surveys.reverse().map(survey => {
            return (
                <div className="card" key={survey._id}>
                    <div className="card-body">
                        <h5 className="card-title">{survey.title}</h5>
                        <p className="card-text">{survey.body}</p>
                        <span  className="card-link">Sent On: {new Date(survey.dateSent).toLocaleDateString()} </span>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            {renderSurvey()}
        </div>
    );
};

function mapStateToProps(state) {
    return {
        surveys: state.surveysReducer
    }
}

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);