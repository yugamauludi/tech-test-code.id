import React from "react";
import loader from "../assets/loader.gif";
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contactPostAdd } from "../store/actions/actionCreator";
import MySwal from "sweetalert2"

const EditContact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contactDetail = useSelector(state => state.contactDetail)
    const [dataContact, setDataContact] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    })
    const formSubmit = (e) => {
        e.preventDefault()
        dispatch(contactPostAdd(dataContact))
        .then(data => {
            navigate('/')
            MySwal.fire({
                html: "Contact Successfully Added",
                icon: 'success'
            })
        })
    }
    const { isLoading } = useSelector((state) => state.isLoading);
    if (isLoading) {
        return (
          <div className="d-flex justify-content-center mt-4">
            <img className="" src={loader} style={{ width: "100px", height: "100px", marginTop: "250px"}} alt="" />
          </div>
        );
    }
    return (
        <>
            <div className="h-90 bg-white p-5 rounded-5" style={{ width: "50%", marginBottom: "5px", marginTop: "50px", marginLeft: "25%" }}>
                <h1 className="fw-bold mb-3">Add New Contact</h1>
                {/* <FormAddEdit /> */}
                <Form onSubmit={formSubmit}>
                    <Form.Group controlId="formBasicName" style={{ marginTop: "10px" }}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name"
                            defaultValue={dataContact.firstName}
                            onChange={(e) => {
                                setDataContact({
                                    ...dataContact,
                                    firstName: e.target.value
                                })
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" style={{ marginTop: "10px" }}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" 
                            defaultValue={dataContact.lastName}
                            onChange={(e) => {
                                setDataContact({
                                    ...dataContact,
                                    lastName: e.target.value
                                })
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ marginTop: "10px" }}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" 
                            defaultValue={dataContact.age}
                            onChange={(e) => {
                                setDataContact({
                                    ...dataContact,
                                    age: e.target.value
                                })
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" style={{ marginTop: "10px" }}>
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" placeholder="Put link for your photo" 
                            defaultValue={dataContact.photo}
                            onChange={(e) => {
                                setDataContact({
                                    ...dataContact,
                                    photo: e.target.value
                                })
                            }}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default EditContact