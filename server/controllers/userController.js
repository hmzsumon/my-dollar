const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const sendToken = require('../utils/sendToken');
const ErrorHandler = require('../utils/errorHandler');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const db = require('../db');
const jwt = require('jsonwebtoken');

exports.test = asyncErrorHandler(async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM users');

  res.status(200).json({
    success: true,
    message: 'This route is working',
    usersLength: rows.length,
    users: rows,
  });
});

// register a new user
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
  const { username, name, email, phone, password } = req.body;

  // check if user already exists
  const { rows: existsUser } = await db.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );

  if (existsUser.length > 0) {
    return next(
      new ErrorHandler(`${existsUser[0].email}  already exists`, 400)
    );
  }

  // check username
  const { rows: existsUsername } = await db.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );

  if (existsUsername.length > 0) {
    return next(
      new ErrorHandler(`${existsUsername[0].username}  already exists`, 400)
    );
  }

  // check phone
  const { rows: existsPhone } = await db.query(
    'SELECT * FROM users WHERE phone = $1',
    [phone]
  );

  if (existsPhone.length > 0) {
    return next(
      new ErrorHandler(`${existsPhone[0].phone}  already exists`, 400)
    );
  }

  //create unique customer_id
  const customer_id = crypto.randomBytes(4).toString('hex');

  // password encryption
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const { rows } = await db.query(
    'INSERT INTO users (username, name, email, phone, password,  customer_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [username, name, email, phone, hashedPassword, customer_id]
  );

  // create token
  const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  // res.status(200).json({
  //   success: true,
  //   message: 'User registered successfully',
  //   token,
  //   data: rows[0],
  // });

  sendToken(rows[0], 200, res, token);
});

// login user
exports.loginUser = asyncErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler('Please enter email and password', 400));
  }

  // find user in database
  const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  if (rows.length === 0) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  const isPasswordMatched = await bcrypt.compare(password, rows[0].password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  // create token
  const token = jwt.sign({ id: rows[0].user_id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  // res.status(200).json({
  //   success: true,
  //   message: 'User logged in successfully',
  //   token,
  //   data: rows[0],
  // });

  sendToken(rows[0], 200, res, token);
});

// get all users
exports.getUsers = asyncErrorHandler(async (req, res, next) => {
  const { rows } = await db.query('SELECT * FROM users');

  res.status(200).json({
    success: true,
    message: 'All users',
    usersLength: rows.length,
    users: rows,
  });
});

// delete user by id
exports.deleteUser = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  const { rows } = await db.query('DELETE FROM users WHERE id = $1', [id]);

  res.status(200).json({
    success: true,
    message: 'User deleted successfully',
    data: rows,
  });
});

// Get User Details
exports.getUserDetails = asyncErrorHandler(async (req, res, next) => {
  const { user_id } = req.user;

  const { rows } = await db.query('SELECT * FROM users WHERE user_id = $1', [
    user_id,
  ]);

  res.status(200).json({
    success: true,
    user: rows[0],
  });
});

// update user role
exports.updateUserRole = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.body;

  const { rows } = await db.query(
    'UPDATE users SET role = $1 WHERE id = $2 RETURNING *',
    [role, id]
  );

  res.status(200).json({
    success: true,
    message: 'User role updated successfully',
    data: rows,
  });
});

// logout user
exports.logoutUser = asyncErrorHandler(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'User logged out successfully',
  });
});
