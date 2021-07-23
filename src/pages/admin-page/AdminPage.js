import { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import ItemForm from '../../components/item-form/ItemForm';
import './admin-page.css'
// import ModalDelete from '../../components/modal-delete/ModalDelete';
import { Link, Redirect, withRouter } from "react-router-dom"
import { db } from '../../firebase'
import { v4 as uuidv4 } from 'uuid';

const AdminPage = (props) => {

    // Toggle ajouter un article
    const [showForm, setShowForm] = useState(false)


    // Add item
    const addItem = async item => {
        // props.setList([item, ...props.dataitem])
        try {
            await db.collection('items').doc(uuidv4()).set(item)
            setShowForm(false)
        } catch (error) {
            console.error(error.message)
        }
    }


    //Modal Delete
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        //Delete item
    const [id, setId] = useState(null)


    if (!props.user || !props.user.admin){
        return <Redirect to={{path: '/'}} />
    }

    const deleteItem = async id => {
        // const newList = props.dataitem.filter(item => item.id !== id)
        // console.log(newList)
        // props.setList(newList)
        try {
            await db.collection('items').doc(id).delete()

        } catch (error) {
            console.error(error.message)
        }
    }



    return (
        <div>
            <h1>Page d'Admin</h1>
            {!props.dataitem ? (
                <h2>Loading</h2>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dataitem.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price} €</td>
                                <td className="btn__delete"><i className="fas fa-trash" onClick={() => {
                                    setId(item.id)
                                    setShow(true)
                                }} ></i></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Button onClick={() => setShowForm(!showForm)} variant="info">Ajouter un article</Button>
            {showForm && <ItemForm addItem={addItem} />}
            

                <Modal show={show} onHide={handleClose}>
                    {/* <Modal.Header closeButton>
                    </Modal.Header> */}
                    <Modal.Body>Supprimer cet article ?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        deleteItem(id)
                        setShow(false)
                    }}>
                        Oui
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Non
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default withRouter(AdminPage);
