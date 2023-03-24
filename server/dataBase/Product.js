const {Schema,model,Types} = require('mongoose');

const productSchema=new Schema({
    imageUrl:{type:String},
    name:{type:String,required:true,trim:true, lowercase:true,minLength:2,maxLength:30},
    count:{type:Number},
    size:{
        width:{type:Number},
        height:{type:Number}
    },
    weight:{type:String,trim:true},
},{
    timestamps:true
})

module.exports=model('Product',productSchema)