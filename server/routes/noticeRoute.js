const express = require('express');
const {
  createNotice,
  getNotices,
  getNotice,
  updateNotice,
  getActiveNotice,
} = require('../controllers/noticeController');

const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router
  .route('/notice')
  .post(isAuthenticatedUser, authorizeRoles('admin'), createNotice);

// get all notices
router.route('/notices').get(getNotices);

// get single notice
router.route('/notice/:id').get(getNotice);

// update notice
router
  .route('/notice/:id')
  .patch(isAuthenticatedUser, authorizeRoles('admin'), updateNotice);

// get active notice
router.route('/active/notice').get(getActiveNotice);

module.exports = router;
