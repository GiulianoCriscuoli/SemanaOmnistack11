const knex = require('knex'); //permite o uso sqlite
const configuration = require('../../knexfile'); //config do sqlite

const connection = knex(configuration.development); //development é o padrão de configuração onde estão as migrations

module.exports = connection;