import { Service } from "typedi";
import Product from "./Product";

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const ProductSchema = {
  _id: Number,
  description: String,
  price: Number,
  stock: Number,
  imageUrlSm: String,
  imageUrlMd: String,
  imageUrlLg: String,
}

const ProductModel = mongoose.model('Product', ProductSchema);

@Service()
class ProductRepository {

  constructor () {
  }

  async getAll(): Promise<Product[]> {
    return ProductModel.find();
  }

}

export default ProductRepository;
