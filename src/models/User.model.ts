import { verify } from "crypto";
import mongoose , { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new Schema({
   username:{
    type: String,
    required: [true, 'Username is required'],
    unique: true
   },
   email : {
    type: String,
    required: [true, 'Email is required'],
    unique: true
   },
   password : {
    type: String,
    required: [true, 'Password is required'],
   },
   isVerified : {
    type: Boolean,
    default: false
   },
   isAdmin : {
    type: Boolean,
    default: false
   },
   forgotPasswordToken : String,
   forgotPasswordTokenExpiry : Date,
   verifyToken : String,
   verifyTokenExpiry : Date
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;