import Container from "typedi";
import { Application } from 'express';
import ProductController from "./ProductController"

export default ( app : Application) => {
    
    const productController = Container.get(ProductController);

    app.get('/products',async(req,res) => {

        return productController.getPage(req, res);
        
    });

}