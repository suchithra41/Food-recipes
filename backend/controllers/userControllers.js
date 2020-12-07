import User from '../modals/userModal.js'

export const addUser = async(req , res) => {
    const { name , email , password } = req.body;

    try {
        const user = await User.create({
            name , 
            email ,
            password
        });

        res.json(user);

    } catch(error) {
        res.status(500);
        throw new Error(error);
    }
}

export const authUser = async(req , res) => {

    const { email , password } = req.body;

    const user = await User.find({email})

    if(user) {
        if(user.email == email && user.password == password){
            res.json(user);
        } else {
            throw new Error('User Details are wrong');
        }
    } else {
        throw new Error('User Not Found');
    }
}

export const editUser = async(req , res) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if(user){
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        const updatedUser = await user.save();
        res.json(updatedUser);
    }
}

export const fetchUsers = async(req , res) => {
    const users = await User.find({});

    res.json(users);
}

export const fetchUser = async(req , res) => {

    const id = req.params.id

    const user = await User.findById(id);

    if(user){
        res.json(user);
    } else {
        throw new Error('User Not Found')
    }
}

export const deleteUser = async(req , res) => {
    const id = req.params.id;

    const user = await User.findById(id);

    if(user){
        const deletedUser =  await user.remove();

        res.json({message : "User Deleted"});



    } else {
        throw new Error('User Not Found');
    }

}