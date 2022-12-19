const db = require('../config/database')
const inventoryRouter = require('express').Router()

// const { inventory } = db

inventoryRouter.get('/', async(res, req) => {
    const productid = Number(req.params.productid) 
    db.productid.findAll({ where: { productid: productid } })
})

inventoryRouter.put('/', async(res, req) => {
    
    const { productid } = req.body;
  
    db.productid.findOne({ where: {productid: productid  }, paranoid: false })
        db.productid.update({
                
            }, { where: { productid: productid} })})