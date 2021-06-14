
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.string('id').primary().notNullable()
    table.string('name').notNullable()
    table.string('user').notNullable()
    table.string('pass').notNullable()

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
