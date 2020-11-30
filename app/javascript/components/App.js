import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Animes from './Animes/Animes'
import Anime from './Anime/Anime'
import NavBar from './NavBar/NavBar'
import About from './About/About.js'


const App = () => {
    return (
        <div className='App'>
            <NavBar/>
            <Switch>
                <Route exact path = '/' component = {Animes}/>
                <Route exact path = '/about' component = {About}/>
                <Route exact path = '/animes/:slug' component = {Anime}/>
            </Switch>
        </div>
        
    )
}

export default App