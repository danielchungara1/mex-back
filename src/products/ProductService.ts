import { Service } from "typedi";
import User from "./Product";
import ProductRepository from "./ProductRepository";

@Service()
class ProductService {
  constructor(private readonly respository: ProductRepository) { }

  async getPage(page: Number): Promise<User[]> {
    return await this.respository.getPage(page);
  }

}

export default ProductService;
