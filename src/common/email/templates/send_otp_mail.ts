export const template = (full_name : string , otpCode :string ) =>{
    return `
    Dear ${full_name} ,your otp code is ${otpCode}
    `;
}