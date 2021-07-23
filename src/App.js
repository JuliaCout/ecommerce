import "bootswatch/dist/simplex/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Banner from "./components/banner/Banner";
// import background from "../public/banner.jpg";
import Home from './pages/home/Home';
import data from './data/data.json'
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import SingleItem from "./pages/single-item/SingleItem";
import {auth, getItems, db} from './firebase'
import { useStorageState } from 'react-storage-hooks';
import Login from "./pages/login/Login";
import AdminPage from "./pages/admin-page/AdminPage";
import Basket from "./pages/basket/Basket";

// db.collection('users').add({
//   firstname: 'test', 
//   admin: true, 
//   lastname: 'test', 
//   email: 'test@test.fr'})



const useItems = () => {
  const [items, setItems] = useStorageState(localStorage, 'firebase-list', [])

  useEffect(() => {
    db.collection('items').onSnapshot(snap => {
      const allItems = snap.docs.map(doc => ({...doc.data(), id: doc.id}))
      setItems(allItems)
    })
  }, [setItems])
  return items

}

const useUser = () => {
  const [user, setUser] = useStorageState(localStorage, 'firebase-user', null)

  useEffect(() => {
    auth.onAuthStateChanged(connectedUser => {
      if(connectedUser) {
        db.collection('users')
        .where('email', '==', connectedUser.email )
        .get()
        .then(result => {
          result.forEach(doc => setUser(doc.data()))
        })
      }
      else setUser(null)
    })
  }, [setUser])

  return user

}

function App() {
  const items = useItems()
  const user = useUser()
  const location = useLocation()
  const isHome = location.pathname === '/'
  // console.log(items)
  // console.log(user)

  // const [list, setList] = useStorageState(localStorage, 'firebase-list', items)

  const [basket, setBasket] = useStorageState(localStorage, 'listBasket', [])
  // const [basket, setBasket] = useState([])


  // console.log(basket)
  // console.log(window.location.pathname.split('/')[2])
  
  const addItem = item => {
    // console.log(items)

    // setBasket([item, ...basket])
    // var foundItem = items.filter(item => item.id === window.location.pathname.split('/')[2])
    // console.log(foundItem)
    // setBasket([foundItem, ...basket])
    // setBasket([...basket, item])
    const exist = basket.find(article => article.id === item.id)
    if(exist){
    setBasket(basket.map(article => article.id === exist.id ? {...exist, qty: exist.qty + 1} : article ))

    } else {
      setBasket([...basket, {...item, qty: 1}])

    }
    // console.log(exist)
  }

  const deleteItem = (id) => {
    setBasket(basket.filter(item => item.id !== id))
    
  }

  const subItem = item => {
    if(item.qty === 1) {
      deleteItem(item.id)
    } else {
      setBasket(
        basket.map(article => article.id === item.id ? {...item, qty: item.qty - 1} : article)
      )
    }
  }

  // console.log(basket)


  // useEffect(() => {
  //   getItems().then(result => setList(result))
  // }, [setList])

  return (
    <Fragment>
      <Header user={user} />
      {isHome && <Banner />}
      <Container style={{
          marginTop: isHome ? '200px' : '100px'
        }}>
      <Route exact path='/'>
        {/* <Banner /> */}

          <Home dataitem={items}></Home>
      </Route>
      <Route exact path='/item/:id'>
        <SingleItem dataitem={items} addItem={addItem}   />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/admin'>
        <AdminPage dataitem={items} user={user}   />
      </Route>
      <Route exact path='/basket' >
        <Basket basket={basket} deleteItem={deleteItem} addItem={addItem}  subItem={subItem} />
      </Route>
      </Container>

    </Fragment>

  );
}

export default App;
