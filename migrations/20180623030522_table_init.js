
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
       table.increments('id');
       table.string('email');
       table.string('username');
       table.string('password');
       table.string('avatar');
     }).then(function() {
  return knex.schema.createTable('rooms', function(table) {
      table.increments('id');
      table.string('title');
      table.string('image');
      table.string('url');
      table.string('site');
      table.timestamp('date');
      table.specificType('tags', 'text[]');
      table.text('contenthtml');
      table.text('contenttext');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
    }).then(function() {
  return knex.schema.createTable('messages', function(table) {
      table.increments('id');
      table.text('content');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('room_id').notNullable();
      table.foreign('room_id').references('id').inTable('rooms');
    })
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages').then(function () {
    return knex.schema.dropTable('rooms').then(function () {
      return knex.schema.dropTable('users')
    })
  });
};
