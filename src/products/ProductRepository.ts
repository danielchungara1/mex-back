import { Service } from "typedi";
import ProductModel from "./ProductModel";

@Service()
class ProductRepository {

  constructor () {}

  async getPage(page: Number) {
    return ProductModel.paginate({}, {page});
  }

}

export default ProductRepository;
