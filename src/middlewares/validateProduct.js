import { body, validationResult } from 'express-validator'

const validateProduct = [
  body('name')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Name is required'),

  body('price')
    .isFloat({ min: 10 })
    .withMessage('The price must be a number greater than 10'),

  body('description')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Description is required'),

  body('stock')
    .isInt({ min: 1 })
    .withMessage('The stock must be a number greater than 1'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export default validateProduct
