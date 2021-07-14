const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path/posix');
const port = 3000;
const route = require('./routes');

// cấu hình file static
app.use(express.static(path.join(__dirname, 'public')));
// console.log((path.join(__dirname ,'public')));

// Http logger
app.use(morgan('combined'));

// su dung middleware for post
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', // tu dinh dang duoi name
    }),
);

// set ung dung cua minh dang du dung handlebars
app.set('view engine', 'hbs');

// set thu muc views
app.set('views', path.join(__dirname, 'resources/views'));

// đầu tiên sẽ vô tk route(app) -- > index.js(Route) --> news --> call function handler
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
