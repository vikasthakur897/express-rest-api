import { deleteUserService, getAllUsersService, updateUserService, createUserService, getUserByIdService } from "../models/userModel.js";

const handleResponse = (res, status, message, date = null) => {
   res.status(status).json({
        status, 
        message,
        date,
});
};

export const createUser = async (req , res , next) => {
    const { name, email } = req.body;
    try {
        const createUser = await createUserService(name, email);
        handleResponse(res, 201, 'User created successfully', createUser);
    } catch (error) {
        next(error);
    }
}


export const getAllUsers = async (req , res , next) => {
    
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, 'All Users Fetched successfully ', users);
    } catch (error) {
        next(error);
    }
}


export const getUserById = async (req , res , next) => {
    
    try {
        const user = await getUserByIdService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, `User with id ${req.params.id} not found`);
        }
        handleResponse(res, 200, 'User Fetched successfully ', user);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req , res , next) => {
    const { name, email } = req.body;
    try {
        const updateUser = await updateUserService(req.params.id, name, email);
        if (!updateUser) {
            return handleResponse(res, 404, `User with id ${req.params.id} not found`);
        }
        handleResponse(res, 200, 'User Update successfully ', updateUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req , res , next) => {
    
    try {
        const deleteUser = await deleteUserService(req.params.id);
        if (!user) {
            return handleResponse(res, 404, `User with id ${req.params.id} not found`);
        }
        handleResponse(res, 200, 'User Deleted successfully ', deleteUser);
    } catch (error) {
        next(error);
    }
}