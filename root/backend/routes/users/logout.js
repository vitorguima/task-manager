const router = require('express').Router();

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ authentication: false });
});

module.exports = router;
