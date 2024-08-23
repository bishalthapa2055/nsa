import mongoose  from "mongoose";


export enum TypeEmails {
    welcome = "welcome",
    booking_confirmed  =  "booking_confirmed",
    booking_rejected = "booking_rejected",
    email_verification = "email_verification"
}

export interface EmailAttrs {  

    user_id ?:string;
    email_type ?: TypeEmails ;
    expiry ?: number ;
    verified ?: boolean ;

}



interface EmailModel extends mongoose.Model<EmailDoc>{
    build(attrs : EmailAttrs) :EmailDoc ;
}

export interface EmailDoc extends mongoose.Document, EmailAttrs {

    phone_number ?:string;
    email_type ?: TypeEmails ;
    expiry ?: number ;
    verified ?: boolean ;
    createdAt: Date;
    updatedAt: Date;
}

const EmailSchema = new mongoose.Schema<EmailDoc>({

    phone_number :{
        type : String,
    },
    email_type :{
        type : String,
        enum : TypeEmails
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


EmailSchema.statics.build = (attrs: EmailAttrs) => {
  return new Email(attrs);
};



const Email = mongoose.model<EmailDoc, EmailModel>("Email", EmailSchema);

export { Email };