import { Service } from "typedi";
import ProductModel from "./ProductModel";
import { SearchOptions } from "./SearchOptions";

@Service()
class ProductRepository {

  constructor() { }

  async getPage(options: SearchOptions) {
    return ProductModel.paginate(
      {
        description: { $regex: '.*' + options.searchText + '.*', $options: 'i' }
      },
      { page: options.page }
    );
  }

}

export default ProductRepository;
