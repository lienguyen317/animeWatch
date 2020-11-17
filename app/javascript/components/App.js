import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Animes from './Animes/Animes'
import Anime from './Anime/Anime'

const App = () => {
    return (
        <Switch>
            <Route exact path = '/' component = {Animes}/>
            <Route exact path = '/animes/:slug' component = {Anime}/>

        </Switch>
    )
}

export default App