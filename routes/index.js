import cors from "cors";
import "dotenv/config";

//Importações de Controller
import produtosController from "../controller/produtosController.js";

const routes = (app) => {
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-PINGOTHER, Content-Type, Authorization"
    );
    app.use(cors());
    next();
  });

  app.get('/', function(req, res) {
    return res.status(200).send('MarketAPI 1.0')
  })

  app.get('/product', produtosController.listarProdutos)
  app.post('/product/new', produtosController.criarProduto)
  app.delete('/product/delete', produtosController.apagarProduto)
};



export default routes;
