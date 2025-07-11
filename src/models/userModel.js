import pool from '../config/db.js';

export const getAllUsersService = async() => {
    const result = await pool.query('SELECT * FROM users');

    if (result.rows.length === 0) {
        throw new Error('No users found');
    }
    return result.rows;
};

export const getUserByIdService = async(id) => {
    const result =await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
        throw new Error(`User with id ${id} not found`);
    }
    return result.rows[0];
};

export const createUserService = async(name, email) => {
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    if (result.rows.length === 0) {
        throw new Error('Failed to create user');
    }
    return result.rows[0];
};

export const updateUserService = async(id, userData) => {
    const { name, email } = userData;
    const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    
    if (result.rows.length === 0) {
        throw new Error(`User with id ${id} not found or update failed`);
    }
    return result.rows[0];
};

export const deleteUserService = async(id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
        throw new Error(`User with id ${id} not found or delete failed`);
    }
    return result.rows[0];
};