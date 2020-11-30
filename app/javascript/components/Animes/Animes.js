import React, {useState, useEffect} from 'react'
// 
import axios from 'axios'
import Anime from './Anime'
// yarn installed 
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background-image: url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80");
    height: 100%;
    wifth:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const Header = styled.div`
    padding: 10px 100px 10px 100px;

    h1 {
        font-size: 42px;
        font-family: 'Permanent Marker', cursive;
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