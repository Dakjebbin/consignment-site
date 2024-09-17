import express from 'express';
import { addCode,listCode } from '../controllers/transactionControllers.js';
import multer from 'multer';

const codeRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});

const upload = multer({storage:storage});

codeRouter.post("/add",upload.single("image"),addCode)
codeRouter.get("/list",listCode)



export default codeRouter;