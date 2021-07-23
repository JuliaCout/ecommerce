import React, { Fragment } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './card-item.css'

const Basket = (props) => {
    // const {id, image, qty, title, price, subItem } = props.item

    const amount = props.basket.reduce((accumulator, item) => accumulator + item.price * item.qty, 0)
    return (

        <div id="basket-cards__container">
    {console.log(props.basket)}

            {!props.basket ? (
                <h2>Pas d'article dans le panier</h2>
            ) : (
                props.basket.map(item => (
                    <Card key={item.id} id="basket-card__container" className='mb-3'>
                        <Col className='col-3 d-flex'>
                            <Card.Img className='align-middle p-3' style={{ marginLeft: '0', maxHeight: '200px', objectFit: 'contain' }} variant="top" src={item.image} />
                        </Col>
                        <Col className='col-9'>
                            <Card.Body id="basket-card__body">
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                Prix unitaire: {item.price} €
                                </Card.Text>
                                <Row className='d-flex justify-content-between'>
                                    <Col className='col-8 d-flex flex-row'>
                                        <Button onClick={() => props.subItem(item)} className='px-3 py-0' variant="info">-</Button>
                                        <div className='align-middle mx-2 my-auto'>Quantité: {item.qty}</div>
                                        <Button onClick={() => props.addItem(item)} className='px-3 py-0' variant="info">+</Button>

                                    </Col>
                                    <Col className='col-4'>
                                        <Button onClick={() => props.deleteItem(item.id)} variant="link">Supprimer cet article</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Card>
                ))
            )}
            <div>Total : {amount} </div>
            {/* <Card id="basket-card__container" className=''>
                <Col className='col-3 d-flex'>
                    <Card.Img className='align-middle p-3' style={{ marginLeft: '0', maxHeight: '200px', objectFit: 'contain' }} variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ad245cadd%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ad245cadd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.53125%22%20y%3D%2297.44375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                </Col>
                <Col className='col-9'>
                    <Card.Body id="basket-card__body">
                        <Card.Title>Titre de l'article</Card.Title>
                        <Card.Text>
                        Prix unitaire: 40 €
                        </Card.Text>
                        <Row className='d-flex justify-content-between'>
                            <Col className='col-4 d-flex flex-row'>
                                <Button onClick={() => subItem(props.item)} className='px-3 py-0' variant="info">-</Button>
                                <div className='align-middle mx-2 my-auto'>Quantité: 1</div>
                                <Button className='px-3 py-0' variant="info">+</Button>

                            </Col>
                            <Col className='col-4'>
                                <Button onClick={props.deleteItem} variant="link">Supprimer cet article</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Card>

            <Card id="basket-card__container" className=''>
                <Col className='col-3 d-flex'>
                    <Card.Img className='align-middle p-3' style={{ marginLeft: '0', maxHeight: '200px', objectFit: 'contain' }} variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17ad245cadd%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17ad245cadd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.53125%22%20y%3D%2297.44375%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                </Col>
                <Col className='col-9'>
                    <Card.Body id="basket-card__body">
                        <Card.Title>Titre de l'article</Card.Title>
                        <Card.Text>
                        Prix unitaire: 40 €
                        </Card.Text>
                        <Row className='d-flex justify-content-between'>
                            <Col className='col-4 d-flex flex-row'>
                                <Button className='px-3 py-0' variant="info">-</Button>
                                <div className='align-middle mx-2 my-auto'>Quantité: 1</div>
                                <Button className='px-3 py-0' variant="info">+</Button>

                            </Col>
                            <Col className='col-4'>
                                <Button variant="link">Supprimer cet article</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Card> */}
        </div>
    );
}

export default Basket;
