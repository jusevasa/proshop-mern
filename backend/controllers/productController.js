import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Fecth all products
//@route GET /api/products
//@acess Public
const getProducts = asyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.status(200)
    res.json(products);
})

//@desc Fecth single products
//@route GET /api/products/:id
//@acess Public
const getProductById = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
})

export {
    getProducts, getProductById
}