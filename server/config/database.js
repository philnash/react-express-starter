// the next two lines are used to connect to the db
<<<<<<< Updated upstream
const { Sequelize }= require ('sequelize')
module.exports = new Sequelize(process.env.PG_URI)
=======
const Sequelize = require ('sequelize')
module.exports = new Sequelize(process.env.PG_URI)

>>>>>>> Stashed changes
