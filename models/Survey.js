const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    yes: {
        type: Number,
        default: 0
    },
    no: {
        type: Number,
        default: 0
    },
    dateSent: Date,
    lastResponded: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

mongoose.model('surveys', surveySchema);