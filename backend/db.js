const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    email : {type: String, required :true, unique : true},
    password : String,
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    UserModel : UserModel
};
