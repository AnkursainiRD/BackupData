import express from 'express'
import { newUser } from '../controllers/UserController.js';
const router=express.Router()

router.post('/new',newUser)

export default router;