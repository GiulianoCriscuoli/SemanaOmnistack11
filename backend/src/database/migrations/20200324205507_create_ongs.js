
exports.up = function(knex) {
 return  knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // o segundo parâmetro representa o tamanho da string

  });
};

exports.down = function(knex) {   // usado caso dê merda e eu precisar desfazer a tabela no banco de dados
return  knex.schema.dropTable('ongs');  
};
