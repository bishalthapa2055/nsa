
export const otpGenerator   = () =>{
    return parseInt(Math.floor(100000 + Math.random() * 900000).toString());
    // return Number(111111)
}