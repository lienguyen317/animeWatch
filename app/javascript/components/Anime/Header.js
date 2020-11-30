import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 50px 64px 50px 0;
    font-size: 20px;

    img {
        height: 170px;
        width: 240px; 
        border: 1px solid rgba(0,0,0,0.1); 
        margin-bottom: -8px;
        align-content: center;
    }
`
const TotalReviews = styled.div`
    font-size: 18px; 
    padding: 10px 0;
`
const TotalOutOf = styled.div`
    font-size: 18px; 
    font-weight: bold;
    padding: 10px 0;
`

const Header = (props) =>{
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length

    return (
        <Wrapper>
            <img src={image_url} alt={name} /> 
            <h1> {name} </h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <div className='starRating'></div>
                <TotalOutOf> {avg_score} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header