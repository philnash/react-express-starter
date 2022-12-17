// the next two lines are used to connect to the db
const { Sequelize }= require ('sequelize')
module.exports = new Sequelize(process.env.PG_URI)