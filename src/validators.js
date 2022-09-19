import Joi from "joi";
const validator = (schema) => (payload) => schema.validate(payload);

const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmation: Joi.ref("password"),
});

const signInSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const orderSchema = Joi.object({
  token: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  id: Joi.string().required(),
});

const signupValidation = validator(signUpSchema);
const signinValidation = validator(signInSchema);
const orderValidation = validator(orderSchema);

export { signupValidation, signinValidation, orderValidation };
