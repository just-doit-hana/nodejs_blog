const { error } = require('console');
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] me/storedCourses
    storedCourses(req, res, next) {
        let courseQuery = Course.find({});
        // res.json(res.locals._sort);
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => {
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
        // dem so luong bao nhieu document deleted
        // Course.countDocumentsDeleted()
        //         .then(deleteCount=>{
        //             console.log(deleteCount);
        //         })
        //         .catch(next);
        // them dk deleted : null , da xoa thi them :deletedAt :them ngay thang
        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/stored-courses', {
        //             courses: multipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }

    // [GET] me/trash/Courses
    trashCourses(req, res, next) {
        // them dk deleted : null , da xoa thi them :deletedAt :them ngay thang
        // findDeleted lay ra nhung khoa hoc da xoa
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
