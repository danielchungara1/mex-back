import { Service } from "typedi";
import ProductModel from "./ProductModel";
import { SearchOptions } from "./SearchOptions";

@Service()
class ProductRepository {

  constructor() { }

  async getPage(options: SearchOptions) {
    return ProductModel.paginate(
      {
        description: { $regex: '.*' + options.searchText + '.*', $options: 'i' },                
        $and: [
          {price: {$gte: options.minPrice}}, 
          {price: {$lte: options.maxPrice}}
        ],
        ...(options.available && {stock: {$gt: 0}}),
      },
      { 
        page: options.page,
        sort: `${options.direction==='DESC'?'-':''}${options.sort}`        
      }
    );
  }

}

export default ProductRepository;
