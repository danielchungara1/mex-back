import { Service } from "typedi";
import Product from "./Product";

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.connect('mongodb://localhost:27017/test');

const ProductSchema = new mongoose.Schema({
  _id: Number,
  description: String,
  price: Number,
  stock: Number,
  imageUrlSm: String,
  imageUrlMd: String,
  imageUrlLg: String,
});
ProductSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model('Product', ProductSchema);

@Service()
class ProductRepository {

  constructor () {
  }

  async getPage(page: Number): Promise<Product[]> {
    return ProductModel.paginate({}, {page});
  }

}

export default ProductRepository;
