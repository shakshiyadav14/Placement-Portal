import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        rollNo:{
            type:String,
            required:true,
            unique: true,
        },
        personal_email:{
            type:String,
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            lowercase: true,
        },
        college_email:{
            type:String,
            required: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            lowercase: true,
        },
        phoneNumber:{
            type: String,
            required: true,
            match: /^\d{10}$/,
        },
        gender: {
            type: String,
            required:true,
            enum: ["Male", "Female"], 
        },
        batch: {
            type: String,
            required:true,
        },
        cgpa:{
            type:Number,
            required: true,
            min: 0.0,
            max: 10.0,
        },
        backlogs: {
            type: String,
            enum: ["Nil", "1", "2","3",">=4"],
            required: true,
        },
        branch: {
            type: String,
            enum: ["CS", "IT", "ECE","EE","MECH","CIVIL","PIE"],
            required: true,
        },
        familyIncome: {
            type: String,
            enum: ["<1Lac", ">=1Lac", ">=5Lac"],
            required: true,
        },
        category: {
            type: String,
            enum: ["Gen", "OBC", "SC/ST"],
            required: true,
        },
        studentImage: {
            type: String,
            // required:true,
            //match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        isDisabled: {
            type: String,
            enum: ["Yes", "No"],
            required:true,
        },
        password: {
            type: String,
            required: true,
            select: false,
            validate: {
                validator: function (value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
                },
                message: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
            },
        },
        approved:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        isPlaced:{
            type:String,
            enum:["Yes","No"],
            default:"No",
        },
        github:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        linkedin:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        leetcode:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        codechef:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        codeforces:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        gfg:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        codingninja:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
        resume:{
            type:String,
            match: /^(http|https):\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
        },
    },
    {
        timestamps: true,
    }
);

// middelwares
StudentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

  
//compare password
StudentSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};
  
  //JSON WEBTOKEN
  StudentSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1m",
    });
  };
  
const Student = mongoose.model("Student", StudentSchema);
  
export default Student

