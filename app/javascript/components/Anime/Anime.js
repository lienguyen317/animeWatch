import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right:auto; 
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &: last-child {
        background: #000;
    }
`
const Main = styled.div`
    padding-left: 50px; 
`


const Anime = (props) => {
    const [anime, setAnime] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/animes/${slug}`
        
        axios.get(url)
        .then( resp => {
            setAnime(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp))
    },[])

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review ', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const anime_id = anime.data.id 
        axios.post('/api/v1/reviews', {review, anime_id})
        .then(resp =>{
            const included = [...anime.included, resp.data]
            setAnime({...anime, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp =>{

        })
    }


    return(
        <Wrapper>
            { 
                loaded && 
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={anime.data.attributes}
                                reviews={anime.included}
                            />
                            <div className='reviews'></div>
                        </Main>     
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={anime.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Anime