import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef; 
    background: #fff;
    text-align: center;
    opacity: 0.8;
`
const AnimeThumbNail =  styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px; 
        border-radius: 100%;
        border: 1px solid #efefef; 
    }
`
const AnimeName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #6D466B;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Anime = (props) => {
    return(
        <Card>
            <AnimeThumbNail>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </AnimeThumbNail>
            <AnimeName>{props.attributes.name}</AnimeName>
            {/* <div className = 'anime-score'>{props.attributes.avg_score}</div> */}
            <Rating score={props.attributes.avg_score}/>
            <LinkWrapper>
                <Link to={`/animes/${props.attributes.slug}`}>View Anime</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Anime