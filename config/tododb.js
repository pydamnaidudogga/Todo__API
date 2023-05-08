// mysql config file contains the host, user, password and dbname

module.exports = {
    HOST: "sql12.freemysqlhosting.net",
    USER: "sql12616939",
    PASSWORD: 'IHFbG4ph6N',
    DB: "sql12616939",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };