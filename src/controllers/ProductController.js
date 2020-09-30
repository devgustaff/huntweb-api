const Produto = require("../models/Product");

class ProductController {
  async index(req, res) {
    const { page = 1 } = req.query;
    try {
      const products = await Produto.getProducts(page);
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  }

  async add(req, res) {
    try {
      const product = await Produto.insert(req.body);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async show(req, res) {
    try {
      const product = await Produto.getSpecific(req.params.id);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const product = await Produto.updateProd(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(req, res) {
    try {
      const product = await Produto.delete(req.params.id);
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductController();
