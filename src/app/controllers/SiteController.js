const { error } = require('console');
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // dat phuong thuc
    // [GET] /
    index(req, res, next) {
        //    Course.find({},function(err,courses){
        //        if(!err){
        //            res.json(courses);
        //        }
        //        else{
        //            res.status(400).json({error :"ERROR!!"});
        //        }
        //    });

        // cach viet promise
        Course.find({})
            .then((courses) => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
