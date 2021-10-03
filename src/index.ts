import express,{ Request,Response } from 'express';
import 'reflect-metadata';
import Connect from './connect';
import ProductRoutes from './products/ProductRoutes';

var cors = require('cors')

const main = async () => {

  const app = express();
  
  app.use(cors())
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/',(req: Request, res: Response ) => {
    console.log(req);
    res.send('TS App is Running Working')
  })

  const SERVER_PORT = process.env.PORT || 3001;
  const db = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

  Connect({ db });
  ProductRoutes(app);

  app.listen(SERVER_PORT, () => {
    console.log('>>> Server started on port ' + SERVER_PORT);
  });

}

main().catch(err => {
  console.error(err);
});