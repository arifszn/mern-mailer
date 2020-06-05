import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

const SurveyNew = (props) => {
    const [state, setState] = useState({
        title: '',
        subject: '',
        body: '',
        recipients: ''
    });

    let history = useHistory();
    //validator
    const [, forceUpdate] = useState() //this is a dummy state, when form submitted, change the state so that message is rendered
    const simpleValidator = useRef(new SimpleReactValidator({
            autoForceUpdate: {forceUpdate: forceUpdate},
            className: 'small text-danger fa fa-exclamation-triangle pt-1 pl-1',
            validators: {
                customEmail: { // name the rule
                    message: 'Invalid recipients', // give a message that will display when there is an error. :attribute will be replaced by the name you supply in calling it.
                    rule: function(val, params, validator) { // return true if it is succeeds and false it if fails validation.
                        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        const invalidEmails = val.split(',')
                                                .map(email => email.trim())
                                                .filter(email => re.test(email) === false)
                                                
                        if (invalidEmails.length) {
                            return false;
                        }
                        return true;
                    }
                }
            }
    }));

    const onChangeHandle = (e) =>{
        const { name, value } = e.target;
        setState({
            ...state,
            [name] : value
        });
    }

    const onSubmitHandle = async (e) =>{
        e.preventDefault();
        
        if (simpleValidator.current.allValid()) {
            try {
                const res = await Axios.post('/api/surveys', state);
                props.fetchUser();
                history.push('/surveys');
                
            } catch (error) {
                console.log(error.response);
                alert(error.response.data.error)
            }
            
        } else {
            simpleValidator.current.showMessages();
            forceUpdate(1);
        }

    }

    return (
        <div>
            <div className="container pt-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={onSubmitHandle}>
                            <div className="form-group">
                                <ul className="nav nav-tabs nav-pills c--nav-pills nav-justified">
                                    <li className="nav-item">
                                        <span className="nav-link btn btn-info btn-block active">New Survey</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-group">
                                <label >Survey Title</label>
                                <input type="text" className="form-control" id="title" name="title" value={state.title} onChange={onChangeHandle} placeholder="Survey Title" />
                                {simpleValidator.current.message('name', state.title, 'required')}
                            </div>
                            <div className="form-group">
                                <label >Email Subject</label>
                                <input type="text" className="form-control" id="subject" placeholder="Email Subject" name="subject" value={state.subject} onChange={onChangeHandle}/>
                                {simpleValidator.current.message('subject', state.subject, 'required')}
                            </div>
                            <div className="form-group">
                                <label >Email Body</label>
                                <textarea className="form-control" id="body" placeholder="Email Body" rows="3" name="body" value={state.body} onChange={onChangeHandle}></textarea>
                                {simpleValidator.current.message('body', state.body, 'required')}
                            </div>
                            <div className="form-group">
                                <label >Recipients</label>
                                <textarea className="form-control" id="recipients" placeholder="Example: a@example.com, b@example.com" rows="3" name="recipients" value={state.recipients} onChange={onChangeHandle}></textarea>
                                {simpleValidator.current.message('recipients', state.recipients, 'required|customEmail')}
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-success mr-2">Send</button>
                                <Link className="btn btn btn-info" to="/surveys">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default connect(null, actions)(SurveyNew)