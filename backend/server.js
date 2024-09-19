import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from  "dotenv"

//load environment variable
dotenv.config();


//app config
const app = express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json());
app.use(cors())

//connectDB

 mongoose.connect('mongodb+srv://Dakjebbin:Dakjebbin505@cluster0.vqb04.mongodb.net/consignment',
    {useNewUrlParser: true,
        useunifiedTopology: true
    }).then(()=>console.log("mongoDB connected"))
    .catch((err)=>console.log(err));

//define the shipmentSchema and model
    
const shipmentSchema = new mongoose.Schema({
    trackingCode: {type: String, unique:true, required: true},
    status: {type: String, required: true},
});

const Shipment = mongoose.model("Shipment",shipmentSchema);


// api endpoints

app.get("/",(req, res) => {
    res.send("API working")
});

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});


// route to create new shipment (for admin panel)

app.get('/api/shipments', async(req, res) => {
    try {
        const shipments = await Shipment.find();
        res.json(shipments);
    } catch (error) {
        res.status(500).json({message:
            'Error fetching shipment'});
    }
});

// route to create a new shipment(for admin panel)
   
app.post('/api/shipments', async (req, res) => {

    const {trackingCode, status } = req.body;

    
    try { const newShipment = new Shipment({
        trackingCode,
        status,
    });

    await newShipment.save();
    res.status(201).json(newShipment);
    } catch (error) {
       if (error.code === 11000) {
        res.status(400).json({message: 'Tracking code already exists'});
       } else {
            res.status(500).json({message:'Error saving shipment'});
       }
    }
});


//route for deleting a shipment
// Delete route for shipment
app.delete('/api/shipments/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedShipment = await Shipment.findByIdAndDelete(id);
      if (deletedShipment) {
        res.status(200).json({ message: 'Shipment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Shipment not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting shipment' });
    }
  });
  
  
    

// route to get shipment by tracking code (for frontend requests)
app.get('/api/shipments/:trackingCode',
    async (req, res) => {
        const {trackingCode} = req.params;

        try{
            const shipment = await Shipment.findOne({trackingCode});
            if(shipment) {
                res.json(shipment);
            } else {
                res.status(404).json({message:'Tracking Code not found'});
            }
        } catch(error) {
            res.status(500).json({message:'Error fetching Shipments'});
        }
    });

    

