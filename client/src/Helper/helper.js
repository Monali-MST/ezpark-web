import baseUrl from "../Apis/baseUrl";

/** generate OTP */
export async function generateOTP(username, contactInfo, isEmail){
  console.log(username,contactInfo)
    try {
        const {data : { code }, status } = await baseUrl.get('/generateOTP');
        // send mail with the OTP
        if(status === 201){
          //  let { data : { email }} = await getUser({ username });
            let text = `Your OTP is ${code}. Verify your account and continue with our service`;
            if(isEmail){
              const mailRes =  await baseUrl.post('/sendMail', { username, userEmail: contactInfo, text, subject : "OTP Verification"});
              console.log(mailRes.data);
            }
             else{
               const to = contactInfo;
               console.log("Mobile otp is "+code)
            //   const SMSRes = await baseUrl.post("/sendSMS", {to, text});
             // console.log(SMSRes.data)
            }
           
        }
        return Promise.resolve(code);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP( code ){
  console.log(code)
    try {
       const { data, status } = await baseUrl.get('/verifyOTP', { params : {  code }})
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function registerUser(credentials) {


  try {
    const {
      data: { msg },
      status,
    } = await baseUrl.post("/register", credentials);
    let {  Email } = credentials;
    console.log( Email)

    /* Send email */
    if (status === 201) {
      return true
    }
    return false
    return Promise.resolve(msg);
  } catch (error) {
console.log(error)
return false
  }
}

export async function vehicleRegister(credentials) {


  try {
    const {
      data: { msg },
      status,
    } = await baseUrl.post("/vehicles", credentials);
    let {  Email } = credentials;
    console.log( Email)

    /* Send email */
    if (status === 201) {
      return true
    }
    return false
    return Promise.resolve(msg);
  } catch (error) {
console.log(error)
return false
  }
}