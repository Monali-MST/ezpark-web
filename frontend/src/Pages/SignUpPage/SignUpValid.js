const validate = (values) => {
const errors = {};
const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!values.Fname) {
  errors.Fname = "First name field cannot be empty";
}
if (!values.AddFLine) {
  errors.AddFLine = "First line of the address field cannot be empty";
}
if (!values.AddSLine) {
  errors.AddSLine = "Second line of the address field cannot be empty";
}
if (!values.City) {
  errors.City = "City field cannot be empty";
}
if (!values.PCode) {
  errors.PCode = "Postal Code field cannot be empty";
}
if (!values.MobNum) {
  errors.MobNum = "Mobile Number field cannot be empty";
}else{
  if(values.MobNum.slice(0,2)==="94"){
    if(!(/^\d{11}$/.test(values.MobNum))){
      errors.MobNum = "Invalid Phone Number";
    }else{
      values.MobNum = "+"+values.MobNum;
      errors.MobNum = "";
    }
  }else if(values.MobNum.charAt(0)==="0"){
    if(!(/^\d{10}$/.test(values.MobNum))){
      errors.MobNum = "Invalid Phone Number";
    }else{
      values.MobNum = "+94"+(values.MobNum.slice(1));
      errors.MobNum = "";
    }
  }else if(values.MobNum.slice(0,3)==="+94"){
    if((!(values.MobNum.length===12)) || values.MobNum.charAt(3)==="0"){
      errors.MobNum = "Invalid Phone Number";
  }else{
    errors.MobNum = "";
  }
 }else{
   errors.MobNum = "Invalid Phone Number";
 }
}

if (!values.FixedNum) {
  errors.FixedNum = "Postal Code field cannot be empty";
}

if (!values.Nic) {
  errors.Nic = "NIC field cannot be empty";
}else if((/^\d{12}$/.test(values.Nic))){
       errors.Nic="";
 }else if(values.Nic.length===10){
       if(!(values.Nic.charAt(9)==="V" || values.Nic.charAt(9)==="v")){
     errors.Nic="Invalid NIC";
   }else{
     errors.Nic="";
 }
}else{
   errors.Nic="Invalid NIC";
 }

if (!values.Email) {
  errors.Email = "Email field cannot be empty";
}else if(!regex.test(values.Email)){
  errors.Email = "Invalid Email";
}

if (!values.Pword) {
  errors.Pword = "Password field cannot be empty";
}

return errors;
};
  export default validate;