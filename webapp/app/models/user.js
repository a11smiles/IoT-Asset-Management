// community libs
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

// user model
var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, select: false }  // NOTE: 'select' attribute does not currently work with DocumentDB
});

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
    var user = this;

    // hash the password only if the password has been changed or if the user is new
    if(!user.isModified('password')) return next();

    // generate hash
    bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) return next(err);

        // changed password to hashed version
        user.password = hash;
        
        // call next method in chain
        next();
    });
});

// method to compare a supplied password with the password stored in the database
UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
}

// return the model
module.exports = mongoose.model('User', UserSchema);
