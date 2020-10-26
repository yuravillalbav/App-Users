const usersCtrl = {};

const User = require('../models/user.model');

usersCtrl.getUsers = async(req, res) => {
    const users = await User.find();
     res.json(users).status(200);
}

usersCtrl.postUser = async (req, res) => {
    const {firstname, lastname, email} = req.body;
    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email
    });
     await newUser.save();
     res.json({message: 'User created'}).status(201);
}

usersCtrl.gettUser = async (req, res) => {
    const user = await User.findById(req.params.id);
     res.json(user);
}
usersCtrl.patchUser = async (req, res) => {
    const {firstname, lastname, email} = req.body;
    await User.findOneAndUpdate({_id: req.params.id},{
        firstname,
        lastname,
        email
    });

    res.json({message: 'User updated.'});
   
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id});
     res.json({message: 'User deleted.'});
}

module.exports = usersCtrl;