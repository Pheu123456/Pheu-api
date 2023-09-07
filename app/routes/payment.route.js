/**
 * Created by bioz on 1/13/2017.
 */
// our components
const paymentService = require('../services/payment.service');

module.exports = function (app) {
    app.post('/api/v1/payments', paymentService.create);
};
