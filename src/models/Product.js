const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.plugin(mongoosePaginate);

const ProductModel = mongoose.model("Product", ProductSchema);

class Product {
  async insert(body) {
    return await ProductModel.create({
      title: body.title,
      description: body.description,
      url: body.url,
    });
  }

  async getProducts(page) {
    return await ProductModel.paginate({}, { page, limit: 4 });
  }

  async getSpecific(id) {
    return await ProductModel.findById(id);
  }

  async updateProd(id, body) {
    return await ProductModel.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id) {
    return await ProductModel.findByIdAndRemove(id);
  }
}

module.exports = new Product();
