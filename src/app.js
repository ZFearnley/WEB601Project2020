import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import home from './components/pages/home'
import preMadeDesigns from './components/pages/preMadeDesigns'
import customDesigns from './components/pages/customDesigns'
import contactUs from './components/pages/contactUs'
import logIn from './components/pages/logIn'
import signUp from './components/pages/signUp.js'
import cart from './components/pages/cart'
import NavBar  from './components/navBar'
import Footer from './components/footer'
import './index.css'

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
            <NavBar/>
                <div>
                
                    <Route path="/" exact component={home} />
                    <Route path="/preMadeDesigns" exact component={preMadeDesigns} />
                    <Route path="/customDesigns" exact component={customDesigns} />
                    <Route path="/contactUs" exact component={contactUs} />
                    <Route path="/logIn" exact component={logIn} />
                    <Route path="/signUp" exact component={signUp} />
                    <Route path="/cart" exact component={cart} />
                    
                </div>
            </BrowserRouter>
            
        </div>
    )
}

export default App;