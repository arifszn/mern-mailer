import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const Payments = (props) => {
    return (
        <StripeCheckout
            name="Mern Mailer"
            description="$5 for 5 email credit"
            amount={500} // cents
            token={token => props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        >
            <button className="btn btn-success btn-block">
                Add Credits
            </button>
        </StripeCheckout>
    );
};

export default connect(null, actions)(Payments);