// var mongoose = require('mongoose');
var  StockModel= require('../models/stock.model');

var createItem = async (req, res, next) => {
try {
    var newItem =new StockModel(req.body);
    var savedItem =await newItem.save();

    console.log(savedItem);
    res.status(201).json({
        message:'Item saved successfully',
        item: savedItem
    })
} catch (error) {
    res.status(500).send('Failed to save item');
}

};

var listStock = async (req, res, next) => {
    try {
        var stock=await StockModel.find({});
        res.status(200).json(stock);

        
    } catch (error) {
        res.status(500).send('Failed to find stock items')
    }
}


module.exports ={
    createItem,
    listStock
}
