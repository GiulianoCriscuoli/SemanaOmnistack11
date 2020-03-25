const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //development é o padrão de configuração onde estão as migrations

module.exports = connection;