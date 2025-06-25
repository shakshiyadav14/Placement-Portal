import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

const PostHolderSchema = new mongoose.Schema(
    {
        rollNo: {
            type: String,
            required: true,
            ref:"Student",
            unique: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        post:{
            type:String,
            required: true,
            enum:["ICC","PCC"],
        },

        password: {
            type: String,
            required: true,
            select: false,
        }
    },
    {
        timestamps: true,
    }
);


// middelwares
PostHolderSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

  
//compare password
PostHolderSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
};
  
  //JSON WEBTOKEN
  PostHolderSchema.methods.createJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1m",
    });
  };


export default mongoose.model("PostHolder", PostHolderSchema);