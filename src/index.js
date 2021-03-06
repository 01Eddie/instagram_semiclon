const express=require('express');
const morgan=require('morgan');
const engine=require('ejs-mate');
const path = require('path')

const app= express();

//Settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/index'));

//static files

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Puerto numero: ', app.get('port'));
})