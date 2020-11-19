import React, {useState, useEffect, Fragment} from 'react'
// 
import axios from 'axios'
import Anime from './Anime'
// yarn installed 
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Animes = () => {
    const [animes, setAnimes] = useState([])

    useEffect(()=>{
        // Get all animes from api
        // Update animes in our state
        axios.get('/api/v1/animes.json')
        .then( resp => setAnimes(resp.data.data))
        .catch( resp => console.log(resp))
    }, [animes.length])

    const grid = animes.map(item =>{
        return(
            <Anime 
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return(
        // replace div for Home since we're using styled-components this was defined on line 8, this will take in the style that we made from above
        <Home>
             {/* replace div className='header' with Header styled component */}
            <Header >
                <h1>Anime Watch</h1>
                <Subheader>Wondering which anime to watch next?</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>  
        </Home>
    )
}

export default Animes