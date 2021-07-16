const express = require('express');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path/posix');
const methodOverride = require('method-override');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

const SortMiddleware = require('./app/middleware/SortMiddleware');
// Connect db
db.connect();
// custom middleware
app.use(SortMiddleware);
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
app.use(methodOverride('_method'));
// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', // tu dinh dang duoi name
        // customs
        helpers: {
            sum: (a, b) => a + b,
            sortable: (filed, sort) => {
                // check flied bam tren url co phai la filed  sort.colum hay ko
                const sortType = filed === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];
                return `  <a href="?_sort&column=${filed}&type=${type}">
                <span class="${icon}"></span>
                </a>`;
            },
        },
    }),
);

// set ung dung cua minh dang du dung handlebars
app.set('view engine', 'hbs');

// set thu muc views
// de theo keiu doi so hdh se tu the vo  resources/views
app.set('views', path.join(__dirname, 'resources', 'views'));

// đầu tiên sẽ vô tk route(app) -- > index.js(Route) --> news --> call function handler
route(app);

app.listen(port, () => {
    console.log(` App listening at http://localhost:${port}`);
});
