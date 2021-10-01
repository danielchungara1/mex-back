import express from 'express';
import 'reflect-metadata';
import Container from 'typedi';
import ProductController from './products/ProductController';

var cors = require('cors')


const main = async () => {
  const app = express();
  app.use(cors())

  const productController = Container.get(ProductController);

  app.get('/products', (req, res) => productController.getPage(req, res));

  const SERVER_PORT = 3001;
  app.listen(SERVER_PORT, () => {
    console.log('Server started on port ' + SERVER_PORT);
  });
}

main().catch(err => {
  console.error(err);
});