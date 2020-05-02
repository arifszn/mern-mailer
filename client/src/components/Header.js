import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.authReducer) {
            case null:
                return;
            case false:
                
                return <li className="nav-item"><a className="nav-link" href="/auth/google"><button className="btn btn-outline-info btn-block">Login With Google</button></a></li>;
            default:
                return [
                    <li key="2" className="form-inline"><a className="nav-link">Credits: {this.props.authReducer.credits}</a></li>,
                    <li key="1" className="nav-item"><a className="nav-link"><Payments/></a></li>,
                    <li key="3" className="nav-item"><a className="nav-link" href="/api/logout"><button className="btn btn-outline-secondary btn-block">Logout</button></a></li>
                ];
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={this.props.authReducer ? '/surveys' : '/'}
                     className="navbar-brand"
                     >Mern Mailer</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    };
};

function mapStateToProp(state) {
    return {
        authReducer: state.authReducer
    }
    
}
export default connect(mapStateToProp)(Header);