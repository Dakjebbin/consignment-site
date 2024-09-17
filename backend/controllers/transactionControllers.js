import shipmentModel from "../models/transaction-code.js";
import fs from 'fs'
import {v4 as uuidv4} from 'uuid';


// Function to generate a unique transaction code

const addCode = async (req,res) => {

    let image_filename = `${req.file.filename}`;

const uniqueTrackingCode = uuidv4();

    const code = new shipmentModel({
        trackingCode:uniqueTrackingCode,
        status:req.body.status,
        image:image_filename
    })
    try {
            await code.save();
            res.json({success:true, message:"code added"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//all codes list
const listCode = async (req, res) => {

    try {
        const codes = await shipmentModel.find({});
        res.json({success:true, data:codes})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

export {addCode,listCode}