import { Request, Response } from "express";
import { Service } from "typedi";
import ProductService from "./ProductService";

@Service()
class ProductController {
  constructor(private readonly service: ProductService) { }
  async getAll(_req: Request, res: Response) {
    const result = await this.service.getAll();
    return res.json(result);
  }
}

export default ProductController;
