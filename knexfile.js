// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASEDEV,
      user: process.env.USERDEV,
      password: process.env.PASSWORDDEV
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.HOSTPRO,
      database: process.env.DATABASEPRO,
      user: process.env.USERPRO,
      port: process.env.PORTPRO,
      password: process.env.PASSWORDPRO,
      url: process.env.URLPRO
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
