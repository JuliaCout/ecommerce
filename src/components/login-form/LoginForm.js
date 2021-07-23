import React from 'react';
import { Col, Row, Button, Form } from "react-bootstrap"
import { loginWithGoogle, auth, loginWithEmail } from '../../firebase';
import { useFormik } from 'formik';
import validate from './validation';
import { useHistory } from 'react-router-dom';


const LoginForm = () => {
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validate,
        onSubmit: async values => {
            loginWithEmail(values);
            history.push('/')
        },
      });

    return (
        <div>
            <Form className='my-5' onSubmit={formik.handleSubmit}>
            <h2>Se connecter</h2>
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="text" 
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
                </Row>

                <Button variant="info" type="submit" className="mb-3">Se connecter</Button>
                <Button variant="danger" onClick={() => loginWithGoogle(history)} className="mb-3 mx-3">Se connecter avec Google</Button>

            </Form>
        </div>
    );
}

export default LoginForm;
