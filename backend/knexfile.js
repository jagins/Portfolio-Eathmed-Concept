module.exports = {
   devlopment: 'sqlite3',
   useNullAsDefault: true,
   connection: {
       filename: './data/earthmed.db3'
   },

   migrations: {
       directory: './data/migrations'
   },

   seeds: {
       directory: './data/seeds'
   },

   pool: {
       afterCreate: (conn, done) => {
           conn.run('PRAGMA foreign_keys = ON', done);
       }
   }

}