import { Router } from "express";
import {
    CreateUser,
    UpdateUser,
    getUsers,
    DeleteUser,
    GetUser
} from '../controllers/user.controllers'

const router = Router()

router.post('/users', CreateUser)

router.get('/users', getUsers)

router.put('/users/:id', UpdateUser)

router.delete('/users/:id', DeleteUser)

router.get('/users/:id', GetUser)

export default router