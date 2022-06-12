const express = require('express');
const router =express();

router.use('/admin',require('./admin').routerAdmin);
router.use('/web',require('./web').routerWeb);

module.exports.router=router;
