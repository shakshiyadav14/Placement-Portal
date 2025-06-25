import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            ref:"Student",
        },

        name:{
            type: String,
            required: true,
            ref:"Company",
        },

        job_id:{ 
            type: String,
            required:true,
            ref:"Company",
        },

        status:{
            type:String,
            enum:["OA","Interview","Final"],
        },

        approved:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        }
   
    },
    {
        timestamps: true,
    }
);

ResultSchema.index({ rollNo: 1, name: 1, job_id: 1 }, { unique: true });

export default mongoose.model("Result", ResultSchema);