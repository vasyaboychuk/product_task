const Product = require("../dataBase/Product");
const ApiError = require("../error/ApiError");
const {Types} = require("mongoose");

module.exports = {
    getALl: async (req, res, next) => {
        try {
            const products = await Product.find({})
            if (!products) {
                throw new ApiError('There is not user yet', 404)
            }

            res.json(products)
        } catch (e) {
            next(e);
        }

    },
    getOneById: async (req, res, next) => {
        try {
            const {id} = req.params;

            // const product = await Product.findById(id).populate('comments');

            const product = await Product.aggregate([
                {
                   $match: {
                            _id: new Types.ObjectId(id)
                          },
                },
                {
                    $lookup: {
                        from: "comment",
                        localField: "_id",
                        foreignField: "productId",
                        as: "comments",
                    },
                }])


            res.json(product)
        } catch (e) {
            next(e);
        }

    },
    createProduct: async (req, res, next) => {
        try {
            const newProduct = await Product.create(req.body)

            res.json(newProduct)
        } catch (e) {
            next(e);

        }

    },
    deleteProduct: async (req, res, next) => {
        try {
            const {id} = req.params;
            await Product.deleteOne({_id:id})
            res.json("deleted")
        } catch (e) {
            next(e);
        }

    },
    updateProduct: async (req, res, next) => {
        try {


        } catch (e) {
            next(e);
        }

    }
}
