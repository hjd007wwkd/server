
exports.seed = function(knex, Promise) {
  return knex('messages').del()
    .then(function () {
      return knex('rooms').del();
    })
    .then(function () {
      return knex('subtopics').del();
    })
    .then(function () {
      return knex('topics').del();
    })
    .then(function () {
      return knex('users').del();
    })
    .then(function () {
      return knex('users').insert(
        {name: 'Jin', email: 'hjd007wwkd@hotmail.com', username: 'hjd', password: 0000}
      );
    })
    .then(function() {
      return knex('topics').insert(
        {name: 'hahaha'}
      );
    })
    .then(function() {
      return knex('subtopics').insert(
        {name: 'haha', topic_id: 1}
      );
    })
    .then(function() {
      return knex('rooms').insert(
        {name: 'roomNn', image: 'hahaha', description: 'hahaha', subtopic_id: 1}
      );
    })
    .then(function() {
      return knex('messages').insert([
        {content: 'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated.', user_id: 1, room_id: 1},
        {content: 'Polite askajsdf', user_id: 1, room_id: 1},
        {content: 'Polite in of in oh needed itself silent course.', user_id: 1, room_id: 1},
        {content: 'Polite in of in oh nee', user_id: 1, room_id: 1},
        {content: 'Polahwa soidjfg wflaksjdlkfn!!!', user_id: 1, room_id: 1},
        {content: 'Polite askajsdf', user_id: 1, room_id: 1},
        {content: 'Polahwa soidjfg wflaksjdlkfn!!!', user_id: 1, room_id: 1}
      ]);
    })
};
