const Product = require('../models/product');

exports.create_product = async (req, res) => {
    
    const { title, description, price, imgUrl } = req.body;

    let newProduct = new Product({
        title,
        description,
        price,
        imgUrl
    });

   newProduct = await newProduct.save();

   res.json(newProduct);  
};
