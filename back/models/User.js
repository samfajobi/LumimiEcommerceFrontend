const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: [true,"Please provide a username"], unique: true, },
        email: { type: String, required: [true, 'Please provide an email'], unique: true,lowercase: true,},
        password: { type: String, required: [true, "Please provide a password"]},
        isAdmin: {type: Boolean, default: false}
    },
    {
        timestamps: true
    } 
);

const UserModel = mongoose.model('UserModel', UserSchema);
module.exports = UserModel;