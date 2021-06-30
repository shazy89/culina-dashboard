import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

const ProjectFormFields = () => {
  return (
    <Formik
      initialValues={{
        companyId: "",
        state: "",
        projectName: "",
        city: "",
        address: "",
        zipCode: "",
        startDate: "",
        deadLine: "",
        address: "",
        contract: "",
        email: "",
        contactName: "",
        contactCompanyName: "",
        contactNumber: "",
        notes: "",
        description: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({
        handleSubmit,
        errors,
        touched,
        values,
        setFieldValue,
        handleChange
      }) => (
        <Form className="u-margin-top-big" onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Company Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="contactCompanyName"
                value={values.contactCompanyName}
                onChange={handleChange}
                isValid={
                  touched.contactCompanyName && !errors.contactCompanyName
                }
              />
              {errors.contactCompanyName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.contactCompanyName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Project Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="projectName"
                value={values.projectName}
                onChange={handleChange}
                isValid={touched.projectName && !errors.projectName}
              />
              {errors.projectName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.projectName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Contact Number</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.firstName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Company Name</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.firstName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Email Address</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.firstName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label className="font__size-2">Contact Number</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              {errors.firstName ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.firstName}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="address">
              <Form.Label className="font__size-2">Address</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
              />
              {errors.address ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.address}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="city">
              <Form.Label className="font__size-2">City</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
              />
              {errors.city ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.city}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>{" "}
            <Form.Group as={Col} md="2" controlId="state">
              <Form.Label className="font__size-2">State</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="state"
                value={values.state}
                onChange={handleChange}
                isValid={touched.state && !errors.state}
              />
              {errors.state ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.state}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="zipCode">
              <Form.Label className="font__size-2">Zip Code</Form.Label>
              <Form.Control
                className="font__size-2"
                type="text"
                name="zipCode"
                value={values.zipCode}
                onChange={handleChange}
                isValid={touched.zipCode && !errors.zipCode}
              />
              {errors.zipCode ? (
                <p className="font__size-1 form_input-danger">
                  {" "}
                  {errors.zipCode}{" "}
                </p>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
          </Form.Row>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectFormFields;
