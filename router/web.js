import express from 'express';
// import multer from 'multer';
import { addUserController, deleteUserController, getUserController, homeController } from '../controller/homeController.js';
const router=express.Router();

// // Set up multer storage configuration
// const storage = multer.memoryStorage(); // You can customize this based on your requirements
// const upload = multer({ storage: storage });

router.get('/',homeController);


// api for add user
// router.post('/addUser',upload.none(),addUserController)
router.post('/addUser',addUserController)

//  api to delete user
router.delete('/deleteUser/:id',deleteUserController)



// api for get all user

router.get('/getUser',getUserController)



export default router;