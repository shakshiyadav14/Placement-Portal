import mongoose from "mongoose";

const FinalResultSchema = new mongoose.Schema(
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

        ctc:{ //ctc/stipend
            type:String,
            required:true,
        },

        job_profile: { //job profile
            type: [String],
            enum: ["Intern + Full Time","Full Time", "Intern", "Research Intern/Project"],
            required: true,
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

FinalResultSchema.index({ rollNo: 1, name: 1, job_id: 1 }, { unique: true });

export default mongoose.model("FinalResult", FinalResultSchema);