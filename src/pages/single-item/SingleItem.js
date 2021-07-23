import React from 'react';
import { Col, Row, Button, Image } from "react-bootstrap"
import { Link, withRouter, useParams, useHistory } from "react-router-dom"

const SingleItem = ({dataitem, match, addItem}) => {

    const history = useHistory()

    const itemFound = dataitem.find(item => item.id === match.params.id)
    return (
        <Row>
            <Col md={6}>
                <Image style={{ maxHeight: 300, margin: '0 auto' }} src={itemFound.image}></Image>
            </Col>
            <Col  md={6}>
                <div>
                    <h1>hello single item</h1>
                    <p>{itemFound.title}</p>
                    
                    <p>{itemFound.description}</p>

                    <p>{itemFound.price} €</p>
                    <Button as={Link} to="#" onClick={() => {
                        addItem(itemFound)
                        history.push('/basket')
                    }}>Ajouter au panier</Button>
                    {/* <Button as={Link} to="/" variant="link">Retour</Button> */}
                    <Button onClick={() => history.goBack()} variant="link">Retour</Button>
                </div>
            </Col>
        </Row>

    );
}

export default withRouter(SingleItem);
