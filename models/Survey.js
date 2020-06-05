const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientSchema],
    dateSent: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

mongoose.model('surveys', surveySchema);