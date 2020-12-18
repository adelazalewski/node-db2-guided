module.exports = {
    development: {
      client: "sqlite3", // tell knex that we're using SQLite
      useNullAsDefault: true, // a flag required by SQLite
      connection: {
        filename: "./data/produce.db3", // location of our database file
      }
    },
  }