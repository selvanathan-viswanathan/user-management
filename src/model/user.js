import * as mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String,
        default: 'self'
    },
    createdBy: {
        type: String,
        default: 'self'
    },
    password: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function preSave(next){
    var something = this;
    something.updatedAt(Date.now());
    next();
});
const userModel = mongoose.model("userModel", userSchema);

export default userModel;