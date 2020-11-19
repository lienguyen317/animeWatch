import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Anime = (props) => {
    const [anime, setAnime] = useState({})
    const [review, setReview] = useState({})

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/animes/${slug}`
        
        axios.get(url)
        .then( resp => setAnime(resp.data))
        .catch( resp => console.log(resp))
    },[])




    return(
        <div></div>
    )
}

export default Anime