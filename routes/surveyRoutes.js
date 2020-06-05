const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = (app) => {
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({
            _user: req.user.id
        })
        .select({ recipients: false });

        res.send(surveys);
    });

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => {
                return {
                    email: email
                }
            }),
            _user: req.user.id,
            dateSent: Date.now()
        });

        try {
            //send mail
            const mailer = new Mailer(survey, surveyTemplate(survey));
            const sendMailRes = await mailer.send();
            console.log(sendMailRes);

            if (!sendMailRes) {
                return res.status(422).send({error: 'Mail Could not be sent due to server issues'});
            }
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.send(user);
        } catch (error) {
            return res.status(422).send(error);
        }
    });
};
