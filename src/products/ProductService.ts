import { Service } from "typedi";
import ProductRepository from "./ProductRepository";

@Service()
class ProductService {
  
  constructor(private readonly respository: ProductRepository) { }

  async getPage(page: Number) {

    return await this.respository.getPage(page);

  }

}

export default ProductService;
