import React from 'react';
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
    border: 2px solid #2F242C;
    border-radius: 4px;
    padding: 20px;
    margin: 0 47px 20px 0;
    background-color: grey;
    opacity: 0.7;
    font-weight: bold;
`
const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`
const Description = styled.div`
    padding: 0 0 20px 0;
    fontsize: 14px
`

const Review = (props) => {
    // object destructuring to pass down the attribute to review
    const {score, title, description} = props.attributes

    return(
        <Card>
            <RatingContainer>
                <Rating score={score}/>
            </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Review; 