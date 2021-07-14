const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
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

module.exports = mongoose.model('Course', Course);
