const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const payment = mySequel.define('payment', {
    id: {
        type: sequel.BIGINT(20),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    full_name: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    email: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    address: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    city: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    phone: {
        type: sequel.BIGINT(64),
        allowNull: false,
    },
    zip: {
        type: sequel.BIGINT(64),
        allowNull: false,
    },
    name_on_card: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    credit_card_number: {
        type: sequel.BIGINT(64),
        allowNull: false,
    },
    exp_month: {
        type: sequel.STRING(64),
        allowNull: false,
    },
    exp_year: {
        type: sequel.BIGINT(64),
        allowNull: false,
    },
    ccv: {
        type: sequel.BIGINT(64),
        allowNull: false,
    },
}, {
    underscored: false,
    timestamps: false,
    updatedAt: false,
    createdAt: false,
    includeDeleted: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'tbl_payment',
});

module.exports = payment;
