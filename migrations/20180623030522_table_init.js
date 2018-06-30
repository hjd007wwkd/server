
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
       table.increments('id');
       table.string('email');
       table.string('username');
       table.string('password');
       table.string('avatar');
     }).then(function() {
  return knex.schema.createTable('topics', function(table) {
      table.increments('id');
      table.string('name');
    }).then(function() {
  return knex.schema.createTable('subtopics', function(table) {
      table.increments('id');
      table.string('name');
      table.integer('topic_id').notNullable();
      table.foreign('topic_id').references('id').inTable('topics');
    }).then(function() {
  return knex.schema.createTable('rooms', function(table) {
      table.increments('id');
      table.string('name');
      table.string('image');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('subtopic_id').notNullable();
      table.foreign('subtopic_id').references('id').inTable('subtopics');
    }).then(function() {
  return knex.schema.createTable('messages', function(table) {
      table.increments('id');
      table.string('content');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('room_id').notNullable();
      table.foreign('room_id').references('id').inTable('rooms');
    })
    })
    })
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages').then(function () {
    return knex.schema.dropTable('rooms').then(function () {
      return knex.schema.dropTable('subtopics').then(function () {
        return knex.schema.dropTable('topics').then(function () {
          return knex.schema.dropTable('users')
        })
      })
    })
  });
};
