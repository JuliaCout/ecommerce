import React from 'react';
import { Card, Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';
import CardItem from '../../components/card-item/CardItem';

const Home = (props) => {
    console.log(props.dataitem)

//   console.log(list)
    return (
        <Row>
            {!props.dataitem ? (
                <h2>Loading</h2>
            ) : (
                props.dataitem.map(item => (
                    <Col key={item.id} className='mb-3' xs={12} sm={6} md={4} lg={3}>
                            <CardItem {...item} />
                    </Col>
                ))
            )}

        </Row>
    );
}

export default Home;
