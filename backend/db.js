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

const clubSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  totalStudents: Number,
  studentsByYear: Object,
  members: [{ name: String, email: String, year: String, branch: String }],
});

const UserModel = mongoose.model('users', UserSchema);
const PostModel = mongoose.model('posts', postSchema);
const ClubModel = mongoose.model('clubs', clubSchema);

module.exports = {
    UserModel : UserModel,
    PostModel : PostModel,
    ClubModel : ClubModel
};
