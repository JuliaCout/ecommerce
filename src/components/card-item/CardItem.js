import { Card, Button } from 'react-bootstrap';
import './card-item.css'
import { Link, withRouter } from "react-router-dom"


const CardItem = ({ title, price, image, description, id }) => {
    // const description = 'Some quick example text to build on the card title and make up the bulk ofthe cards content.Some quick example text to build on the card title and make up the bulk of the cards content.'

    const reduceText = text => {
        if (text.length > 100) return text.substring(0,99) + ' ...' 
        else return text
    }

    return (
        <Card id="card__container" className='h-100'>
          <Card.Img 
          style={{ maxHeight: '200px', objectFit: 'contain'}} 
          variant="top" 
          src={image} />
          <Card.Body id="card__body">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{reduceText(description)}</Card.Text>
            <Card.Text>{price} € </Card.Text>
            <Button  as={Link} to={`/item/${id}`} variant="primary">Voir l'article</Button>
          </Card.Body>
        </Card>
    )
}


export default CardItem