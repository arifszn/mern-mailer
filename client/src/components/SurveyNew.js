import React from 'react';

const SurveyNew = (props) => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <div className="container">
                        <form>
                            <div className="form-group">
                                <label >Survey Title</label>
                                <input type="email" className="form-control" id="title" placeholder="Survey Title" />
                            </div>
                            <div className="form-group">
                                <label >Email Subject</label>
                                <input type="email" className="form-control" id="subject" placeholder="Email Subject" />
                            </div>
                            
                            <div className="form-group">
                                <label >Email Body</label>
                                <textarea className="form-control" id="body" placeholder="Email Body" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyNew;