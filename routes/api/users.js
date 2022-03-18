const express = require('express');
const router = express.Router();
const {
  body,
  validationResult,
} = require('express-validator');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail,
    body(
      'password',
      'Please enter a password of at least 6 characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
    res.send('User route');
  }
);

module.exports = router;
