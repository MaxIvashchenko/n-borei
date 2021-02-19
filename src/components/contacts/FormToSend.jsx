import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

export default function FormToSend() {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
        isSend: false
    }

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(9, 'Must be 9 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string()
                .min(9, 'Must be 9 characters or more')
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            message: Yup.string().min(9, 'Must be 9 characters or more').required('Required'),
        }),
        onSubmit: values => {

            console.log(values)
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="firstName"
                        type="text"
                        placeholder="Enter firstName"
                        {...formik.getFieldProps('firstName')}
                        isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                        isValid={formik.touched.firstName && !formik.errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="email"
                        type="email"
                        placeholder="Enter email"
                        {...formik.getFieldProps('email')}
                        isInvalid={formik.touched.email && !!formik.errors.email}
                        isValid={formik.touched.email && !formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="phone"
                        type="text"
                        placeholder="phone"
                        {...formik.getFieldProps('phone')}
                        isInvalid={formik.touched.phone && !!formik.errors.phone}
                        isValid={formik.touched.phone && !formik.errors.phone}
                    />
                    <Form.Control.Feedback type="invalid" >
                        {formik.errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        aria-describedby="inputGroupPrepend"
                        id="message"
                        as="textarea"
                        type="text"
                        placeholder="message"
                        {...formik.getFieldProps('message')}
                        isInvalid={formik.touched.message && !!formik.errors.message}
                        isValid={formik.touched.message && !formik.errors.message}
                    />
                    <Form.Control.Feedback type="invalid" >
                        {formik.errors.message}
                    </Form.Control.Feedback>
                </Form.Group>


                <Button type="submit">Submit form</Button>
            </form>
        </>
    );

}