const {Schema,model,Types} = require('mongoose');

const productSchema=new Schema({
    imageUrl:{type:String},
    name:{type:String,required:true,trim:true, lowercase:true,minLength:2,maxLength:30},
    count:{type:Number},
    size:{
        width:{type:Number,required:true},
        height:{type:Number,required:true}
    },
    weight:{type:String,required:true,trim:true},
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
},{
    timestamps:true
})

module.exports=model('Product',productSchema)