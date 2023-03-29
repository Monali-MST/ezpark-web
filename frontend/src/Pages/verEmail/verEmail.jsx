// import React, { useEffect, useState } from "react";
// import SecureLS from "secure-ls";
// import emailjs from 'emailjs-com';


// const ls = new SecureLS();
// const VerEmail = props => {
//     const [To_mail, setToMail] = useState('');
//     const [F_name, setF_name] = useState('');
//     const [L_name, setL_name] = useState('');
//     const [OTP, setOTP] = useState('');

//     var templateParams = {
//         to_mail: To_mail,
//         OTP: OTP,
//         f_name: F_name,
//         l_name: L_name,
//     };

//     useEffect(() => {
//         async function getData() {
//             setToMail(await localStorage.getItem('Email'));
//             setF_name(await localStorage.getItem('Fname'));
//             setL_name(await localStorage.getItem('Lname'));
//             setOTP(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);

//         }
//         getData();
//     }, []);

//     const handleClick = async e => {
//         await ls.setItem('OTP', OTP.toString());
//         // console.log(await ls.getItem('OTP'));
//         console.log(OTP);
//         props.navigation.navigate('OtpEmail');

//         // emailjs.send('service_r6g104n', 'template_iq1nsoh', templateParams, '8nD6AUE-CeWWCKKgo')
//         // .then(function(response) {
//         //     console.log(OTP);
//         //     props.navigation.navigate('OtpEmail');
//         // }, function(error) {
//         //     console.log('FAILED...', error);
//         // });
//     }

//     return (
//         <div>
//             <div>
//                 <img source={require("")}  />
//             </div>
//             <div >
//                 <p >Verified!</p>
//                 <Ionicons name="checkmark-circle-sharp" size={150} color={'#38BF2D'}  />
//             </div>
//             <div style={{ width: "90%", alignSelf: "center", marginVertical: 50 }}>
//                 <buttton title={"Verify E-Mail"} onPress={handleClick}/>
//             </div>
//         </div>
//     )
// }



// export default VerEmail;