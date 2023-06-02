import axios from "axios";

export async function generateOTP(username) {
    try {
      const {
        data: { code },
        status,
      } = await axios.get("http://localhost:8800/generateOTP", { params: { username } });
  
      //Send mail with OTP
      if (status === 201) {
      

        let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
        await axios.post("http://localhost:8800/registerMail", {
          username,
          userEmail: "udayanganiherath20@gmail.com",
          text: text,
          subject : "Password Recovery OTP"
        });
      }
      return Promise.resolve(code);
  
    } catch (error) {
      return Promise.reject({ error });
    }
  }