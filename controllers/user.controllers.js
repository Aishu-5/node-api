const User = require('../models/user.model');

//create a user
const createUser = async(req,res) =>{
    try{
            const user = await User.create(req.body);
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
}

//retrieve all the users
const getUsers = async(req,res)=>{
    try{
            const users = await User.find({});
            res.status(200).json(users);
        }
        catch{
            res.status(500).json({message: error.message}); 
        }
}

//retrieve a single user
const getUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}

//updating user details
const updatedUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}

//delete a user
const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id); 
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        res.status(200).json({message:"User deleted sucessfully"})
    }
    catch(error){
        res.status(500).json({message: error.message}); 
    }
}

module.exports={
    createUser,
    getUsers,
    getUser,
    updatedUser,
    deleteUser
}