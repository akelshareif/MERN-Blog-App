const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');
const keys = require('./keys');
const app = express();
const PORT = process.env.PORT || 5000;

// app config
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(expressSanitizer());
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
mongoose.connection.once('open', () => console.log("MongoDB database connection established successfully"));

//Mongoose model config
const blogSchema = new mongoose.Schema({
    title: String,
    imgURL: String,
    content: String,
    created: {type: Date, default: Date.now}
});
// generating model
const Blog = mongoose.model('Blog', blogSchema);


// App Routes

// index route
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            console.log(`Error finding blogs: ${err}`);
        } else{
            res.json(blogs);
        }
    });
});

// create route
app.post('/blogs', (req, res) => {
    const newPost = req.body;
    Blog.create(newPost, (err, newPost) => {
        if(err){
            console.log(`Error adding new post: ${err}`);
        } else{
            console.log('Successfully added new post');
            res.json(newPost);
        }
    });
    

});

// delete route
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err, foundBlog) => {
        if(err){
            res.status(404).json({success: false});
        } else{
            console.log("Successfully removed post");
            res.json({success: true});
        }
    });
});







app.listen(PORT, () => console.log(`Server started on port ${PORT}`));