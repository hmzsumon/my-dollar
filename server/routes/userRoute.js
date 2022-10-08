const express = require('express');
const {
  test,
  registerUser,
  getUsers,
  loginUser,
  getUserDetails,
  logoutUser,
} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/test').get(test);
// register a new user
router.route('/register').post(registerUser);

// login user
router.route('/login').post(loginUser);
//logout user
router.route('/logout').get(logoutUser);

// get all users
router.route('/users').get(getUsers);

// get user details
router.route('/me').get(isAuthenticatedUser, getUserDetails);

module.exports = router;
