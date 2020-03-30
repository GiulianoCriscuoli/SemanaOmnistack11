const knex = require('knex'); //permite o uso sqlite
const configuration = require('../../knexfile'); //config do sqlite
const config = process.env.NODE_ENV == 'test' ? configuration.test:configuration.development;
const connection = knex(config); //development é o padrão de configuração onde estão as migrations

module.exports = connection;