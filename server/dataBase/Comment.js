const {Schema, model, Types} = require('mongoose');
const commentSchema = new Schema({
        description: {type: String, required: true, trim: true},
        productId: {
            type: Types.ObjectId,
            ref: 'Product'
        }
    },
    {
        timestamps: true
    })

module.exports = model('Comment', commentSchema)