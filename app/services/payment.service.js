/**
 * Created by bioz on 1/13/2017.
 */
// third party components

// our components
const payment = require('../models/payment.model');
const rest = require('../utils/restware.util');

module.exports = {
    create: function(req, res) {
        try {
            const query = {};
            query.full_name = req.body.full_name;
            query.email = req.body.email;
            query.address = req.body.address;
            query.city = req.body.city;
            query.phone = req.body.phone;
            query.zip = req.body.zip;
            query.name_on_card = req.body.name_on_card;
            query.credit_card_number = req.body.credit_card_number;
            query.exp_month = req.body.exp_month;
            query.ccv = req.body.ccv;
            query.exp_year = req.body.exp_year;
            payment.create(query).then((result)=>{
                'use strict';
                return rest.sendSuccessOne(res, result, 200);
            }).catch(function(error) {
                'use strict';
                console.log(error);
                return rest.sendError(res, 1, 'create_payment_fail', 400, error);
            });
        } catch (error) {
            console.log(error);
            return rest.sendError(res, 1, 'create_payment_fail', 400, error);
        }
    },

};

