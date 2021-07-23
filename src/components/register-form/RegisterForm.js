import React from 'react';
import { Col, Row, Button, Form } from "react-bootstrap"
import { loginWithGoogle, auth } from '../../firebase';
import { useFormik } from 'formik';
import validate from './validation';
import {register} from '../../firebase'
import { useHistory } from 'react-router-dom';


const RegisterForm = () => {
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatpassword: '',
            admin: '',
        },
        validate,
        onSubmit: async values => {
          await register(values)
          history.push('/')
        },
      });
    return (
            <Form className='my-5' onSubmit={formik.handleSubmit}>
            <h2>S'enregistrer</h2>
            <Row>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Votre prénom</Form.Label>
                    <Form.Control 
                    name="firstname" 
                    type="text"  
                    onChange={formik.handleChange} 
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur}
                    />
                    <Form.Text className='text-primary'>
                        {formik.touched.firstname && formik.errors.firstname && formik.errors.firstname}
                    </Form.Text>
                </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Votre nom</Form.Label>
                    <Form.Control 
                    type="text" 
                    name="lastname" 
                    onChange={formik.handleChange} 
                    value={formik.values.lastname}
                    onBlur={formik.handleBlur}
                    />
                    <Form.Text className='text-primary'>
                        {formik.touched.lastname && formik.errors.lastname && formik.errors.lastname}
                    </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"  
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    />
                    <Form.Text className='text-primary'>
                        {formik.touched.email && formik.errors.email && formik.errors.email}
                    </Form.Text>
                </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"  
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    />
                    <Form.Text className='text-primary'>
                        {formik.touched.password && formik.errors.password && formik.errors.password}
                    </Form.Text>

                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" >
                    <Form.Label>Répéter le mot de passe</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="repeatpassword" 
                    onChange={formik.handleChange} 
                    value={formik.values.repeatpassword}
                    onBlur={formik.handleBlur}
                    />
                    <Form.Text className='text-primary'>
                        {formik.touched.repeatpassword && formik.errors.repeatpassword && formik.errors.repeatpassword}
                    </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" >

                        <Form.Check
                            type='checkbox'
                            id='default-checkbox'
                            name='admin'
                            label='Admin ? '
                            onChange={formik.handleChange} 
                            value={formik.values.admin}

                        />
                    </Form.Group>

                </Col>
            </Row>

                <Button variant="info" type="submit" className="">S'enregistrer</Button>
                <Button variant="danger" type="button" onClick={() => loginWithGoogle(history)} className="mx-3">S'enregistrer avec Google</Button>
            </Form>



    );
}

export default RegisterForm;
