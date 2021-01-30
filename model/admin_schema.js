const mongoose = require('mongoose');
var bcrypt = require('bcrypt');


let schema = mongoose.Schema;

let admin_data = new schema(

    {
        name: { type: String },

        email: { type: String },
        password: { type: String },

        mobile: { type: String },





    },
    {
        collection: "Admin"
    }
);

admin_data.pre('save', async function (next) {
    try {
        //console.log("this is called");
        const salt = await bcrypt.genSalt(10);
        const hasedPassword = await bcrypt.hash(this.password, salt);
        this.password = hasedPassword;

        next();
    }
    catch (error) {
        next(error);
    }
});

admin_data.methods.isValid = function (hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('admin', admin_data);