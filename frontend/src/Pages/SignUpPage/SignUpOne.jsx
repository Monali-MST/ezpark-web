
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


function SignUpOne({ formValues, setFormValues }) {
  
  // const handleChange = (e) => {
  //   setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFname">
          <Form.Control type="text" placeholder="First Name" style={{textAlign: "left",height:"35px"}} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLname">
          <Form.Control type="text" placeholder="Last Name" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddFLine">
        <Form.Control type="text" placeholder="Address(First Line)" style={{textAlign: "left",height:"35px"}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddSLine">
        <Form.Control type="text" placeholder="Address(second Line)" style={{textAlign: "left",height:"35px"}}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridStreet">
          <Form.Control type="text" placeholder="Street" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control type="text" placeholder="City" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>

      

        <Form.Group as={Col} controlId="formGridPcode">
          <Form.Control type="number" placeholder="Postal Code" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMobNum">
          <Form.Control type="number" placeholder="Mobile Number" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFixedNum">
          <Form.Control type="number" placeholder="Fixed Number" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridNic">
        <Form.Control type="text" placeholder="NIC" style={{textAlign: "left",height:"35px"}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Control type="email" placeholder="Email" style={{textAlign: "left",height:"35px"}} />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPword">
          <Form.Control type="password" placeholder="password" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCPword">
          <Form.Control type="password" placeholder="Confirm Password" style={{textAlign: "left",height:"35px"}}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Agree terms and conditions" style={{textAlign: "left",height:"35px"}}/>
      </Form.Group>

      
    </Form>
  );
}

export default SignUpOne;
