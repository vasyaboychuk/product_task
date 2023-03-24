import Joi from "joi";

const productValidator=Joi.object({
    name: Joi.string().regex(/^[a-zA-ZА-Яа-яїЇ]{1,20}/).required()
        .messages({'string.pattern.base': 'тільки букви мінімум 1 символ та маскимум 20 символів'}),
    count: Joi.number().min(1).max(100000).required(),
    weight:Joi.string().required(),
    imageUrl:Joi.string()
})

export {productValidator};