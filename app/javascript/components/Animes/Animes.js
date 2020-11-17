import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'

const Animes = () => {
    const [animes, setAnimes] = useState([])

    useEffect(()=>{
        // Get all animes from api
        // Update animes in our state
        axios.get('/api/v1/animes.json')
        .then( resp => {
            setAnimes(resp.data.data)
        })
        .catch( resp => console.log(resp))
    }, [animes.length])

    const list = animes.map(item =>{
        return(<li key={item.attributes.name}>{item.attributes.name}</li>)
    })

    return(
        <div className = 'home'>
            <div className = 'header'>
                <h1>Anime Watch</h1>
                <div className = 'subheader'>Wondering which anime to watch next?</div>
            </div>
            <div className = 'grid'>
                <ul>{list}</ul>
            </div>  
        </div>  
    )
}

export default Animes