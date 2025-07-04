import express from 'express';

const router = express.Router();

router.get('/user', getAllUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;