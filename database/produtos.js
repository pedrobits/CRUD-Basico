import { faker } from "@faker-js/faker";
import produtosJson from "../produtos.json" assert { type: "json" };

const baseProducts = produtosJson;

const price = baseProducts.map((produto) => {
  const price_in_cents = faker.number.int({ min: 2000, max: 10000 });
  const sales = faker.number.int(40);
  const dateCreated = faker.date.past();

  produto.Preço = price_in_cents;
  produto.vendas = sales;
  produto.DataCriacao = dateCreated;
});

export default baseProducts;
