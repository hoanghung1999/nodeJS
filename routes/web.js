const express = require('express');
const routerWeb =express.Router();
const webcontroller= require('../controller/webController');
routerWeb.get('/', webcontroller.HelloWorld)
module.exports.routerWeb= routerWeb;