const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
// library soft delete
const mongooseDelete = require('mongoose-delete');


const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        // unique:true -- khong the tao slug trung nhau
        slug: { type: String, slug: 'name', unique: true },
        // created_at : { type: Date, required: true, default: Date.now },
        // updated_at : { type: Date, required: true, default: Date.now }
        // created_at: Date,
        // updated_at: Date,
    },
    {
        timestamps: true,
    },
);
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, 
    {  
        // them khoang thoi gian xoa
        deletedAt:true,
        overrideMethods:'all'
    });
module.exports = mongoose.model('Course', Course);
// const CoursesModel =  mongoose.model('Course', Course);
// Create courses 
// CoursesModel.create({
//     name:'Mongoose',
//     description:'Lean basic how to create schema, connect db with node js',
//     videoId:'M62l1xA5Eu8',
//     level:'co ban',
//     image: 'https://img.youtube.com/vi/M62l1xA5Eu8/sddefault.jpg',
//     slug:'Mongoose'
// })
// .then(data =>{
//     console.log('successfully');
// })
// .catch(err =>{
//     console.log('failure');
// })
// tim kiem theo object
// them  dk trong find({})
// CoursesModel.find({
   
// })
//     .then(data =>{
//         console.log('data' , data)
//     })
//     .catch(err =>{
//         console.log('err' , err)
//     })

    // ham delete 
// CoursesModel.deleteOne({
//     _id: '60f0561d35ffc5b07ff4e50e'
// })
// .then(data =>{
//     console.log('successfully');
// })
// .catch(err =>{
//     console.log('failure');
// })

// tim theo operator 

// CoursesModel.find({
//     age:{
//         $gt:200
//     }
// })
// .then(data=>{
//     console.log('Successful');
// })
// .catch(err =>{
//     console.log('Failure');
// })
