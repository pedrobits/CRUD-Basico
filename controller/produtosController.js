import baseProducts from "../database/produtos.js";

class produtosController {
  static listarProdutos = (_req, res) => {
    if (baseProducts.length < 1) {
      return res.status(500).send({
        erro: "sim",
        Resultado:
          "Houve um erro ao processar a listagem. Por favor, consulte seu T.I. (Z.104)",
      });
    }

    return res.status(200).json({ erro: "não", Resultado: baseProducts });
  };

  static criarProduto = (req, res) => {
    const { name, description, image_url, category } = req.body;

    const findExistProduct = baseProducts.some(
      (produto) => produto.name === name
    );

    if (!findExistProduct) {
      baseProducts.push({
        name: name,
        description: description,
        image_url: image_url,
        category: category,
      });
    } else {
      return res.status(500).send({
        erro: "sim",
        resultado: "Produto já existe no banco de dados.",
      });
    }

    const findNewProduct = baseProducts.some(
      (produto) => produto.name === name
    );

    if (!findNewProduct) {
      return res.status(500).send({
        erro: "sim",
        resultado:
          "Ocorreu um erro ao incluir o produto no banco de dados. (Z. 105)",
      });
    }

    return res
      .status(200)
      .send({
        erro: "não",
        resultado: "Produto Incluido com sucesso.",
        Data: baseProducts,
      });
  };

  static apagarProduto = (req, res) => {
    const { name } = req.body;

    if(!name){
        return res.status(404).send({erro: "sim", resultado: "Produto não selecionado."})
    }

    const indexParaExcluir = baseProducts.findIndex(
      (objeto) => objeto.name === name
    );

    if (indexParaExcluir !== -1) {
      baseProducts.splice(indexParaExcluir, 1);

      return res
        .status(200)
        .send({ erro: "não", resultado: "Item apagado com sucesso." });
    } else {
        return res
        .status(500)
        .send({ erro: "sim", resultado: "Não foi possivel apagar este item. (Z.106)" });
    }
  };
}

export default produtosController;
