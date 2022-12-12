require('dotenv').config() 

module.exports = {
    "development": {
      "username": process.env.DB_USERNAME,
      "password": null,
      "database": "firestarter",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": null,
      "database": "firestarter",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": null,
      "database": "firestarter",
      "host": "127.0.0.1",
      "dialect": "postgres"
    }
  }