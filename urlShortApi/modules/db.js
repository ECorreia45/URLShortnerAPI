let sequelize = require('sequelize');
require('dotenv').config();

let seq = new sequelize(
    process.env.DB_name,
    process.env.DB_user,
    process.env.DB_pass,
    {
        host: process.env.DB_host,
        dialect: process.env.DB_schema,
        port: process.env.DB_port,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false
    });

const siteLink = seq.define('siteLink',{
    url: {
        type: sequelize.STRING
    },
    shortURL: {
        type: sequelize.STRING
    }
});

seq.sync();

exports.seq = seq;
exports.siteLink = siteLink;

