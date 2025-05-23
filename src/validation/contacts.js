import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Is favourite should be a boolean',
    'any.required': 'Is favourite is required',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  userId: Joi.string(),
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Is favourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
