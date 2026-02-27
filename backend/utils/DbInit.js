const User = require('../models/User')
const bcrypt = require('bcrypt');

const createAdmin = async () => {
    try{
        const user = await User.findOne({role: 'admin'});
        if(user){
            console.log('User Already Exists');
            return;
        }

        const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
        await User.create({
            name: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: hashPassword,
            role: 'admin'
        })
        console.log('Admin Create Successfully');
        
    }catch(error){
        console.log(error.message);
        
    }
}
module.exports = createAdmin;