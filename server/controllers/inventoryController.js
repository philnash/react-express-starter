const connect = require('../db/config/database')
const inventoryRouter = require('express').Router()

inventoryRouter.get('/', async(res, req) => {
    const produce_id = Number(req.params.produce_id) 
    connect.produce_id.findAll({ where: { produce_id: produce_id } })
})

inventoryRouter.put('/', async(res, req) => {
    
    const { produce_id } = req.body;
  
    connect.produce_id.findOne({ where: {produce_id: produce_id  }, paranoid: false })
        connect.produce_id.update({
                
            }, { where: { produce_id: produce_id} })})