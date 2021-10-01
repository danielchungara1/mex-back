import { Request, Response } from "express";
import { Service } from "typedi";
import ProductService from "./ProductService";

@Service()
class ProductController {
  
  constructor(private readonly service: ProductService) { }

  async getPage(_req: Request, res: Response) {
    const page: Number = _req.query.page ? Number(_req.query.page) : 1;
    const result = await this.service.getPage(page);
    return res.json(result);
  }

}

export default ProductController;
