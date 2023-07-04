import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { SignUpContext } from "../../App";
import myImage from "../../Assets/parking-booking.jpg";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css";
import moment from "moment";
import axios from "axios";

function BookingPage() {
  const [
    pageNo,
    setPageNo,
    dataSet,
    SetDataSet,
    startDate,
    setStartDate,
    endDate,
    SetendDate,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
  ] = useContext(SignUpContext);
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [vehicleNoList, setVehicleNoList] = useState([]);
  const [payment, setPayment] = useState("");
  const [tempPayment, setTempPayment] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const navigate = useNavigate();
  const [timeOut,setTimeOut] = useState(false);
  const [formValues, setFormValues] = useState({
    BookedDate: "",
    StartTime: "",
    EndTime: "",
    VehicleNo: "",
    BookingMethod: "",
    UserEmail: "",
  });

  const [completeFormValues, setCompleteFormValues] = useState({
    BookedDate: "",
    StartTime: "",
    EndTime: "",
    VehicleNo: "",
    BookingMethod: "",
    UserEmail: "",
    TempId: 0,
    slotId: 0,
  });

  const handlePaymentOptionChange = (event) => {
    if (event.target.value == "online") {
      setPayment(event.target.value);
      setTempPayment("cash");
    } else {
      setPayment(event.target.value);
      setTempPayment(event.target.value);
    }
  };


  // useEffect(() => {

    

  // }, [timeOut])
  

  const handleVehicleNoOptionChange = (event) => {
    setVehicleNo(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(payment);
    var tempDate = moment
      .utc(startDate.toString())
      .utcOffset("+05:30")
      .format();
    tempDate = tempDate.slice(0, -15);
    console.log("start date", tempDate);
    setFormValues({
      BookedDate: tempDate,
      StartTime: startTime,
      EndTime: endTime,
      VehicleNo: vehicleNo,
      BookingMethod: tempPayment,
      UserEmail: email,
    });
    console.log(formValues);
  };

  useEffect(() => {
    if (
      formValues.BookedDate != "" &&
      formValues.BookingMethod != "" &&
      formValues.EndTime != "" &&
      formValues.VehicleNo != "" &&
      formValues.startTime != "" &&
      formValues.UserEmail != ""
    ) {
      axios
        .post("http://localhost:8800/api/user/savetempbooking", {
          BookinData: formValues,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            //navigate('/success_payemnt')
            alert(res.data);
            
            //navigate("/success_payemnt");

            setTimeout(() => {
              

              //-------------------------------------------------------------------


              var Usersemail = localStorage.getItem("Email");
              console.log(Usersemail);
          
              axios
                .get(`http://localhost:8800/api/user/getbookingfromtemp/${Usersemail}`)
                .then((res) => {
                  // console.log(res.data[0].BookingID);
          
                  if (res.status === 200) {
                    //console.log(res.data[0]);
                    var tempDate = res.data[0].BookedDate;
                    var localdate = new Date(tempDate);
          
                    var tempDate2 = moment
                      .utc(localdate.toString())
                      .utcOffset("+05:30")
                      .format();
                    tempDate2 = tempDate2.slice(0, -15);
          
                    console.log(res.data[0]);
          
                    var startTime = res.data[0].StartTime;
                    var endTime = res.data[0].EndTime;
                    var userEmail = res.data[0].user_email;
                    var vehicleNo = res.data[0].VehicleNo;
                    var bookinMethod = res.data[0].BookingMethod;
                    var slot = res.data[0].slot;
                    var tempId = res.data[0].BookingID;
          
                    setCompleteFormValues({
                      BookedDate: tempDate2,
                      StartTime: startTime,
                      EndTime: endTime,
                      VehicleNo: vehicleNo,
                      BookingMethod: bookinMethod,
                      UserEmail: userEmail,
                      TempId: tempId,
                      slotId: slot,
                    });
                  } else {
                    console.log("error occur");
                  }
                })
                .catch((err) => {
                  console.log(err);
                });


              //--------------------------------------------------------------------

            }, 10000);

            //navigate("/mybooking");

          } else {
            alert("Something wrong");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data);
        });
    }
  }, [formValues]);


  useEffect(() => {
    if (
      completeFormValues.BookedDate != "" &&
      completeFormValues.BookingMethod != "" &&
      completeFormValues.EndTime != "" &&
      completeFormValues.VehicleNo != "" &&
      completeFormValues.startTime != "" &&
      completeFormValues.UserEmail != "" &&
      completeFormValues.tempId != 0 &&
      completeFormValues.slotId != 0
    ) {
      axios
        .post("http://localhost:8800/api/user/savetemptobooking", {
          BookinData: completeFormValues,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // navigate('/success_payemnt')
            alert("Data added to booking");
            navigate("/mybooking");
          } else {
            alert("Something wrong");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }, [completeFormValues]);


  useEffect(() => {
    console.log("context test start time", typeof startDate.getDate());
    const Email = localStorage.getItem("Email");
    let month = startDate.getMonth() + 1;
    let dateString =
      startDate.getDate().toString() +
      "/" +
      month.toString() +
      "/" +
      startDate.getFullYear().toString();
    setDate(dateString);
    setEmail(Email);

    axios
      .get(`http://localhost:8800/api/user/getUserVehicleDetails/${Email}`)
      .then((res) => {
        console.log([...res.data]);
        setVehicleNoList([...res.data]);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div
        className="booking-form"
        style={{ color: "white", marginRight: "100px" }}
      >
        <div
          className="booking-form-container"
          style={{ marginRight: "600px", marginTop: "50px", padding: "50px" }}
        >
          <Form>
            <h2>MAKE YOUR SPACE</h2>
            {/* <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label style={{ paddingTop: "2px" }}> Username</Form.Label>
              <Form.Control
                type="text"
                style={{
                  borderColor: "#FAA41E",
                  textAlign: "left",
                  height: "35px",
                }}
              />
            </Form.Group> */}

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{ paddingTop: "2px" }}>Email</Form.Label>
              <Form.Control
                type="Email"
                style={{
                  borderColor: "#FAA41E",
                  textAlign: "left",
                  height: "35px",
                }}
                value={email}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridVehicleNumber">
              <Form.Label style={{ paddingTop: "2px" }}>
                Vehicle Number
              </Form.Label>
              <Form.Select
                style={{ borderColor: "#FAA41E" }}
                onChange={handleVehicleNoOptionChange}
                value={vehicleNo}
              >
                <option>select your vehicle</option>
                {vehicleNoList.map((item, index) => (
                  
                  <option key={index}>{item.VehicleNo}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBookedDate">
              <Form.Label style={{ paddingTop: "2px" }}>Booked Date</Form.Label>
              <Form.Control
                type="text"
                style={{
                  borderColor: "#FAA41E",
                  textAlign: "left",
                  height: "35px",
                }}
                defaultValue={date}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridMobNum">
                <Form.Label style={{ paddingTop: "5px" }}>
                  Start Time
                </Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    borderColor: "#FAA41E",
                    textAlign: "left",
                    height: "35px",
                  }}
                  value={startTime}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFixedNum">
                <Form.Label style={{ paddingTop: "5px" }}>End Time</Form.Label>
                <Form.Control
                  type="text"
                  style={{
                    borderColor: "#FAA41E",
                    textAlign: "left",
                    height: "35px",
                  }}
                  value={endTime}
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} controlId="formGridPaymentMethod">
              <Form.Label style={{ paddingTop: "25px" }}>
                Payment Method
              </Form.Label>
              <Form.Select
                style={{ borderColor: "#FAA41E" }}
                onChange={handlePaymentOptionChange}
                value={payment}
              
              >
                <option>select your payment method</option>
                <option>Online</option>
                <option>Cash Payment</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{
                marginTop: "15px",
                width: "175px",
                backgroundColor: "#FAA41E",
                marginLeft: "100px",
                marginTop: "10px",
              }}
              onClick={handleSubmit}
            >
              Pay Now
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
