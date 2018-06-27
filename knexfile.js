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
      host: 'ec2-23-23-220-19.compute-1.amazonaws.com',
      database: 'dbl1n6a8vhi4ji',
      user: 'kkisdnelugakuz',
      port: '5432',
      password: 'b2aa7c36f3d3ee6431332ba99ad35260f7399115aad77f4ab66b29a887bb7dd5',
      url: 'postgres://kkisdnelugakuz:b2aa7c36f3d3ee6431332ba99ad35260f7399115aad77f4ab66b29a887bb7dd5@ec2-23-23-220-19.compute-1.amazonaws.com:5432/dbl1n6a8vhi4ji'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
