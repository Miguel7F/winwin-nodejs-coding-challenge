import { body, validationResult } from 'express-validator'

const registerValidation = [

  body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('The email address is not valid'),

  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('The password must be at least 6 characters'),

  body('name')
    .notEmpty().withMessage('The name is required'),

  body('role')
    .optional()
    .custom((value, { req }) => {
      const normalizedRole = value.toLowerCase()

      if (!['buyer', 'seller', 'admin'].includes(normalizedRole)) { throw Error('The role is invalid') }
      req.body.role = normalizedRole

      return true
    }).withMessage('The role is invalid'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
]
export default registerValidation
