const express = require('express');
const routerAdmin =express.Router(); 
routerAdmin.get('/', function(req,res){
    res.render('index.ejs');
})
module.exports.routerAdmin= routerAdmin;