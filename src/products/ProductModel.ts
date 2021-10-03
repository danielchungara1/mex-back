const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

export const ProductSchema = new mongoose.Schema({
  _id: Number,
  description: String,
  price: Number,
  stock: Number,
  imageUrlSm: String,
  imageUrlMd: String,
  imageUrlLg: String,
});

ProductSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model('products', ProductSchema);

export default ProductModel;