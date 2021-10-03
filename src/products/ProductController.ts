import { Request, Response } from "express";
import { Service } from "typedi";
import ProductService from "./ProductService";

@Service()
class ProductController {
  
  constructor(private readonly service: ProductService) { }

  async getPage(_req: Request, res: Response) {

    const page: Number = _req.query.page ? Number(_req.query.page) : 1;
    const searchText: String = _req.query.searchText ? String(_req.query.searchText) : '';
    const sort: String = _req.query.sort ? (String(_req.query.sort)).split(',')[0]: 'description';
    const direction: String = _req.query.sort ? (String(_req.query.sort)).split(',')[1]: 'ASC';
    const available = String(_req.query.available) === 'true' ? true : false;    
    
    const result = await this.service.getPage({page, searchText, sort, direction, available});
    
    return res.json(result);    

  }

}

export default ProductController;
