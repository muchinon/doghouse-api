import Joi from "joi";

export const dogSchema = Joi.object({
  dogBreed: Joi.string(),
  weight: Joi.string(),
  image: Joi.string(),
  price: Joi.number(),
});
