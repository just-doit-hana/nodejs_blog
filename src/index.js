const express = require('express');
const app = express();
const morgan =  require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path/posix');
const port = 3000

// cấu hình file static 
app.use(express.static(path.join(__dirname ,'public')));
// console.log((path.join(__dirname ,'public')));
// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname:'.hbs' // tu dinh dang duoi name 
}));

// set ung dung cua minh dang du dung handlebars 
app.set('view engine', 'hbs');
// set thu muc views
app.set('views' , path.join(__dirname , 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})