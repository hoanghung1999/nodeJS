const express = require('express');
const app = express();
require('dotenv').config()
app.use(require('./routes/router').router);
app.set('view engine','ejs');
app.set('view','views');
app.listen(process.env.PORT, function(){
    console.log('server run on : http://localhost:'+process.env.PORT);
})