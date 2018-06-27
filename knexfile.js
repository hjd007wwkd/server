// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'chatting',
      user: 'vagrant',
      password: '0000'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'chatting',
      user: 'vagrant',
      password: '0000'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
