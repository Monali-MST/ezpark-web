import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function SignUpOne({ formValues, setFormValues }) {
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFname">
          <Form.Control
            type="text"
            name="Fname"
            placeholder="First Name"
            value={formValues.Fname}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLname">
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="Lname"
            value={formValues.Lname}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddFLine">
        <Form.Control
          type="text"
          placeholder="Address(First Line)"
          name="AddFLine"
          value={formValues.AddFLine}
          onChange={handleChange}
          style={{ textAlign: "left", height: "35px" }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddSLine">
        <Form.Control
          type="text"
          placeholder="Address(second Line)(Optional)"
          name="AddSLine"
          value={formValues.AddSLine}
          onChange={handleChange}
          style={{ textAlign: "left", height: "35px" }}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridStreet">
          <Form.Control
            type="text"
            placeholder="Street"
            name="Street"
            value={formValues.Street}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Control
            type="text"
            placeholder="City"
            name="City"
            value={formValues.City}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPcode">
          <Form.Control
            type="number"
            placeholder="Postal Code"
            name="PCode"
            value={formValues.PCode}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMobNum">
          <Form.Control
            type="text"
            placeholder="Mobile Number"
            name="MobNum"
            value={formValues.MobNum}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFixedNum">
          <Form.Control
            type="text"
            placeholder="Fixed Number"
            name="FixedNum"
            value={formValues.FixedNum}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridNic">
        <Form.Control
          type="text"
          placeholder="NIC"
          name="Nic"
          value={formValues.Nic}
          onChange={handleChange}
          style={{ textAlign: "left", height: "35px" }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          name="Email"
          value={formValues.Email}
          onChange={handleChange}
          style={{ textAlign: "left", height: "35px" }}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPword">
          <Form.Control
            type="password"
            placeholder="password"
            name="Pword"
            value={formValues.Pword}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCPword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="CPword"
            value={formValues.CPword}
            onChange={handleChange}
            style={{ textAlign: "left", height: "35px" }}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Agree terms and conditions"
          style={{ textAlign: "left", height: "35px" }}
          name="AgreeTerms"
          value={formValues.AgreeTerms}
          onChange={(e) => {
            setFormValues((prev) => ({
              ...prev,
              [e.target.name]: !formValues.AgreeTerms ? true : false,
            }));
          }}
        />
      </Form.Group>
    </Form>
  );
}

export default SignUpOne;
