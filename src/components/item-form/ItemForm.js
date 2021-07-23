import React from 'react';
import { useFormik } from 'formik';
import validate from './validation';
import { Col, Row, Button, Form } from "react-bootstrap"
// import { v4 as uuidv4 } from 'uuid';

const ItemForm = ({addItem}) => {


    const formik = useFormik({
        initialValues: {
            title: '',
            image: '',
            price: '',
            description: '',
            // id: uuidv4()
        },
        validate,
        onSubmit: values => {
        //   register(values);
        addItem(values)
        },
      });
    return (
        <div>
            <Form className='my-5' onSubmit={formik.handleSubmit}>
                <h1>Ajouter un article </h1>
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Nom de l'article</Form.Label>
                        <Form.Control 
                        name="title" 
                        type="text"  
                        onChange={formik.handleChange} 
                        value={formik.values.title}
                        onBlur={formik.handleBlur}
                        />
                        <Form.Text className='text-primary'>
                            {formik.touched.title && formik.errors.title && formik.errors.title}
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Image de l'article</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="image" 
                        onChange={formik.handleChange} 
                        value={formik.values.image}
                        onBlur={formik.handleBlur}
                        />
                        <Form.Text className='text-primary'>
                            {formik.touched.image && formik.errors.image && formik.errors.image}
                        </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Prix de l'article</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="price"  
                        onChange={formik.handleChange} 
                        value={formik.values.price}
                        onBlur={formik.handleBlur}
                        />
                        <Form.Text className='text-primary'>
                            {formik.touched.price && formik.errors.price && formik.errors.price}
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={5}
                        name="description"  
                        onChange={formik.handleChange} 
                        value={formik.values.description}
                        onBlur={formik.handleBlur}
                        />
                        <Form.Text className='text-primary'>
                            {formik.touched.description && formik.errors.description && formik.errors.description}
                        </Form.Text>

                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="info" type="submit" className="">Ajouter</Button>
            </Form>
        </div>
    );
}

export default ItemForm;
