export const expiryOtp = (otpExpiredTimestamp : any , currentTimestamp : any) =>{
    return  otpExpiredTimestamp < currentTimestamp  ? true : false
}