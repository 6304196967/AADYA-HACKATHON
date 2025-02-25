const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username : String,
    email : {type: String, required :true, unique : true},
    password : String,
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = {
    UserModel : UserModel
};
