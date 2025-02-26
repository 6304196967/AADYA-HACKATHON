const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    
    username : String,
    email : {type: String, required :true, unique : true},
    password : String,
    role : String
});

const ReplySchema = new mongoose.Schema({
    content: String,
    user: String,
    timestamp: { type: Date, default: Date.now }
});
  
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    user: String,
    timestamp: { type: Date, default: Date.now },
    replies: [ReplySchema] // ✅ Make sure replies is an array
});

const UserModel = mongoose.model('users', UserSchema);
const PostModel = mongoose.model('posts', postSchema);
module.exports = {
    UserModel : UserModel,
    PostModel : PostModel
};
