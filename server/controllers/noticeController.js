const asyncErrorHandler = require('../middlewares/asyncErrorHandler');

const ErrorHandler = require('../utils/errorHandler');
const db = require('../db');

// create new notice
exports.createNotice = asyncErrorHandler(async (req, res, next) => {
  const { title, description, is_active } = req.body;

  const { rows: newNotice } = await db.query(
    'INSERT INTO notices (title, description, is_active) VALUES ($1, $2, $3) RETURNING *',
    [title, description, is_active]
  );

  // deactive all other notices
  if (is_active) {
    await db.query('UPDATE notices SET is_active = false WHERE id != $1', [
      newNotice[0].id,
    ]);
  }

  res.status(201).json({
    success: true,
    message: 'Notice created successfully',
    notice: newNotice[0],
  });
});

// get all notices
exports.getNotices = asyncErrorHandler(async (req, res, next) => {
  const { rows: notices } = await db.query('SELECT * FROM notices');

  res.status(200).json({
    success: true,
    message: 'All notices',
    noticesLength: notices.length,
    notices,
  });
});

// get single notice
exports.getNotice = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  const { rows: notice } = await db.query(
    'SELECT * FROM notices WHERE id = $1',
    [id]
  );

  if (!notice[0]) {
    return next(new ErrorHandler(`Notice not found with id ${id}`, 404));
  }

  res.status(200).json({
    success: true,
    message: `Notice with id ${id}`,
    notice: notice[0],
  });
});

// delete notice by id
exports.deleteNotice = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  const { rows } = await db.query('DELETE FROM notices WHERE notice_id = $1', [
    id,
  ]);

  res.status(200).json({
    success: true,
    message: 'Notice deleted successfully',
    data: rows,
  });
});

// update notice
exports.updateNotice = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);
  const { title, description, is_active } = req.body;
  console.log(title, description, is_active);

  const { rows: updatedNotice } = await db.query(
    'UPDATE notices SET title = $1, description = $2, is_active = $3 WHERE id = $4 RETURNING *',
    [title, description, is_active, id]
  );

  // deactivate all other notices
  if (is_active) {
    await db.query('UPDATE notices SET is_active = false WHERE id != $1', [id]);
  }

  res.status(200).json({
    success: true,
    message: 'Notice updated successfully',
    data: updatedNotice[0],
  });
});

// active notice and deactive other notices
exports.activeNotice = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;

  const { rows: activeNotice } = await db.query(
    'UPDATE notices SET is_active = true WHERE notice_id = $1 RETURNING *',
    [id]
  );

  const { rows: deactiveNotices } = await db.query(
    'UPDATE notices SET is_active = false WHERE notice_id != $1 RETURNING *',
    [id]
  );

  res.status(200).json({
    success: true,
    message: 'Notice activated successfully',
    data: activeNotice[0],
  });
});

// get active notice
exports.getActiveNotice = asyncErrorHandler(async (req, res, next) => {
  const { rows: activeNotice } = await db.query(
    'SELECT * FROM notices WHERE is_active = true'
  );

  res.status(200).json({
    success: true,
    message: 'Active notice',
    notice: activeNotice[0],
  });
});
