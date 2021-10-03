import { Service } from "typedi";
import ProductRepository from "./ProductRepository";
import { SearchOptions } from "./SearchOptions";

@Service()
class ProductService {
  
  constructor(private readonly respository: ProductRepository) { }

  async getPage(options: SearchOptions) {
    return await this.respository.getPage(options);

  }

}

export default ProductService;
