import mongoose, { Schema } from "mongoose";


export interface OtpAttrs {  

    phone_number ?:string;
    otp_code ?: number ;
    expiry ?: number ;
    verified ?: boolean ;

}



interface OtpModel extends mongoose.Model<OtpDoc>{
    build(attrs : OtpAttrs) :OtpDoc ;
}

export interface OtpDoc extends mongoose.Document, OtpAttrs {

    phone_number ?:string;
    otp_code ?: number ;
    expiry ?: number ;
    verified ?: boolean ;
    createdAt: Date;
    updatedAt: Date;
}

const OtpSchema = new mongoose.Schema<OtpDoc>({

    phone_number :{
        type : String,
    },
    otp_code :{
        type : Number 
    },
    expiry :{
      type : Number
    },
    verified :{
      type : Boolean ,
      default : false
    }
},
{
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  }

)


OtpSchema.statics.build = (attrs: OtpAttrs) => {
  return new Otp(attrs);
};



const Otp = mongoose.model<OtpDoc, OtpModel>("Otp", OtpSchema);

export { Otp };