import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const CompanySchema = new mongoose.Schema(
    { 
        name: { //comapny name
            type: String,
            required: true,
            trim: true,
        },
        ctc:{ //ctc/stipend
            type:String,
            required:true,
        },
        job_id:{ //jobID
            type:String,
        },
        email:{  //email HR //dont display
            type:String,
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            lowercase: true,
        },
        phoneNumber:{  //phn HR //dont display
            type: String,
            required: true,
            match: /^\d{10}$/,
        },
        gender: { //gender eligible
            type: String,
            required:true,
            enum: ["Only Female" ,"Both"], 
        },
        batch: { //batch eligible
            type: String,
            required:true,
        },
        cgpa:{ //cgpa above
            type:Number,
            required: true,
            min: 0.0,
            max: 10.0,
        },
        backlogs: { //backlog allowed
            type: String,
            enum: ["Nil", "1", "2","3",">=4"],
            required: true,
        },
        branch: { //branch allowed
            type: [String],
            enum: ["CS", "IT", "ECE","EE","MECH","CIVIL","PIE"],
            required: true,
        },
        location: { //job location
            type: [String],
            required: true,
        },
        job_profile: { //job profile
            type: [String],
            enum: ["Intern + Full Time","Full Time", "Intern", "Research Intern/Project"],
            required: true,
        },
        companyImage: {
            type: String,
            // required:true,
            //match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        last_date:{
            type:Date,
            required: true,
        },
        isBonus: { //admin
            type: String,
            enum: ["Yes", "No"],
            default: "No",
            required:true,
        },
        password:{
            type:String,
            required:true,
            select: false,
        },
        approved:{//admin
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        isDeleted: { //soft delete //no display//admin
            type: Boolean,
            default: false,
        },
        group_disscussion:{
            type:Boolean,
            required:true,
            default: false,
        },
        tech_rounds:{
            type:Number,
            required:true,
        },
        hr_rounds:{
            type:Number,
            required:true,
        },
        result:{//admin
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        onlyPWD:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        OA:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        aptitude:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        description:{
            type:String,
        }
    },
    {
        timestamps: true,
    }
);

CompanySchema.index({ name: 1, job_id: 1 }, { unique: true });
// middelwares
CompanySchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

  
//compare password
CompanySchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};
  
  //JSON WEBTOKEN
  CompanySchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
  };
  
const Company = mongoose.model("Company", CompanySchema);
  
export default Company