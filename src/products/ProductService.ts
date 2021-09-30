import { Service } from "typedi";
import User from "./Product";
import ProductRepository from "./ProductRepository";

@Service()
class ProductService {
  constructor(private readonly respository: ProductRepository) { }
  async getAll(): Promise<User[]> {
    return await this.respository.getAll();
  }
}

export default ProductService;
