import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right:auto; 
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background-image: url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80");
    background-repeat: no-repeat;
    background-size: cover;
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

        // Get anime id
        const anime_id = anime.data.id 
        axios.post('/api/v1/reviews', {review, anime_id})
        .then(resp =>{
            const included = [...anime.included, resp.data.data]
            setAnime({...anime, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => {})
    }

    // set score
    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    // mapping over anime then passing down attributes to reviews
    let reviews
    if (loaded && anime.included){
        reviews = anime.included.map((item, index) => {
            return(
                <Review
                    key={index}
                    attributes={item.attributes}
                />
            )
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
                            {reviews}
                        </Main>     
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
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