const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.send(path.join(__dirname, '../client/build', 'index.html'));
    })
}

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    stripe.charges.create(body, (stripeError, stripeRes) => {
        if (stripeError) {
            res.status(500).send(({error: stripeError}))
        } else {
            res.status(200).send({success: stripeRes})
        }
    })
})

app.listen(port, error => {
    if(error) throw error;
    console.log('Server running on port ' + port)
});


