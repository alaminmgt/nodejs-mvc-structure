const products = require("../models/products.models");
const path = require("path");

exports.getProducs = (req,res)=>{
    res.sendFile(path.join(__dirname + "./../views/products.html"));
};

exports.seveProducts = (req,res)=>{
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
        name,
        price,
    }
    products.push(product);
    res.status(200).json({
        success : true,
        products, 
    })
};