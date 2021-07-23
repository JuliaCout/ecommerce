
import React from 'react';
import { useState } from "react"
import LoginForm from '../../components/login-form/LoginForm';
import RegisterForm from '../../components/register-form/RegisterForm';
import { Col, Row, Button, Form } from "react-bootstrap"


const Login = () => {
    const [isRegistered, setIsRegistered] = useState(true)

    return (

        <section id="login__section" className='my-5'>
            {isRegistered ? <LoginForm /> : <RegisterForm />}

            <Button onClick={() => setIsRegistered(!isRegistered)} variant="link"  className="mt-3">            {isRegistered ? 'Pas encore inscrit ?' : ' Déjà inscrit ?'} </Button>
        </section>

    );
}

export default Login;
