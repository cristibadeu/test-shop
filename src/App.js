import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utiles';

class App extends React.Component {
  
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/shop' element={ <ShopPage /> } />
          <Route path='/signin' element={ <SignInSignUp /> } />
        </Routes>
      </div>
    );
  }
  
}

export default App;
