import Product from "../models/products";
import joi from "joi";
import Categories from "../models/categories";

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  desc: joi.string(),
  categoryId: joi.string(),
  status: joi.boolean(),
});

export const get = async (req, res) => {
  // /product?_page=2
  const { _page = 1, _limit = 10, _sort = "price", _order = "asc" } = req.query;
  const options = {
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order === "desc" ? -1 : 1,
    },
  };
  try {
    if (req.params.id) {
      const product = await Product.findById(req.params.id).populate(
        "categoryId"
      );
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      return res.status(200).json({
        message: "Product found",
        data: product,
      });
    }

    const { docs: products } = await Product.paginate({}, options);
    if (products.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product found",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.json({
        message: error.details[0].message,
      });
    }
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(404).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    await Categories.findByIdAndUpdate(product.categoryId, {
      $addToSet: {
        products: product._id,
      },
    });
    return res.status(200).json({
      message: "Tạo sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const remove = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      res.json({
        message: error.details[0].message,
      });
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    return res.status(200).json({
      message: "Product updated",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server error",
    });
  }
};
