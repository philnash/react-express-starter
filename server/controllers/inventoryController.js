import { db } from '../models'
const router = require('express').Router()

const { inventory } = db

router.get('/', async(res, req) => {
    const productid = Number(req.params.productid) 
    db.productid.findAll({ where: { productid: productid } })
})

router.put('/', async(res, req) => {
    
    const { productid } = req.body;
  
    db.productid.findOne({ where: {productid: productid  }, paranoid: false })
        db.productid.update({
                
            }, { where: { productid: productid} })})