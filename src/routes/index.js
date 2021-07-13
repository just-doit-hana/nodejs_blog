const newRouter = require('./news')
const siteRouter = require('./site');

// tao ra 1 function 
function route(app) {

    
      
      app.use('/news',newRouter);
      app.use('/' , siteRouter )


    // app.get("/", (req, res) => {
    //     res.render("home");
    //   });

    //   app.get("/news", (req, res) => {
    //     res.render("news");
    //   });
      
      // query la 1 doi tuong req.query.q
      // tai vi trong  tk express  cos middleware nen query se lay dc du lieu  co san
    //   app.get("/search", (req, res) => {
    //     res.render("search");
    //   });
      
      // form data
      // req.body  de lay parameter  req.body trong express chua tich hop san middleware
    //   app.post("/search", (req, res) => {
    //     console.log(req.body);
    //     res.render("search");
    //   });
      
}
module.exports = route;
