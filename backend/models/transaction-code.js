import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
    trackingCode: {type: String, unique:true, required: true},
    status: {type: String, required: true},
    image: {type: String, required: true}
    
});

const shipmentModel = mongoose.models.code || mongoose.model("Shipment",shipmentSchema);

export default shipmentModel;