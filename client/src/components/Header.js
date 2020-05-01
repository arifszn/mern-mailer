import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {
    renderContent() {
        switch (this.props.authReducer) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
              <nav>
                <div className="nav-wrapper purple lighten-2">
                    <Link to={this.props.authReducer ? '/surveys' : '/'}
                     className="left brand-logo"
                     >Mern Mailer</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
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