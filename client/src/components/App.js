import React, { useEffect } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import SurveyNew from '../components/SurveyNew';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

const App = (props) => {
    useEffect(() => {
        props.fetchUser();       
    }, []);

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route exact path="/surveys/new" component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default connect(null, actions) (App);