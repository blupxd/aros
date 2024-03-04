const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        enum: ['milos21'],
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;