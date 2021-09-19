import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function Card({video, genres}) {

    const [genre, setGenre] = useState('')

    useEffect(() => {
        const genre = genres.filter(el => el.id === video.genre_id);
        setGenre(genre[0]?.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video])

    return (
        <CardItem>
            <CardMedia img={video.image_url}>
                {
                    genre && <CardGenre>{genre}</CardGenre>
                }
                <CardYear>{video.release_year}</CardYear>
            </CardMedia>
            <CardDescription>
                <CardInfo>
                    <CardText>
                        <CardTitle>{video.title}</CardTitle>
                        <CardSinger>{video.artist}</CardSinger>
                    </CardText>
                </CardInfo>
            </CardDescription>
        </CardItem>
    )
}

export default Card
const CardItem = styled.div`
    background-color: #fff;
    box-shadow: 10px 10px 40px 2px rgba(128, 128, 128, 0.4);
    display: inline-block;
    width: 300px;
    border-radius: 10px;
    margin:5px;
    height: fit-content;
`;
const CardMedia = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    height: 200px;
    width: 100%;
    object-fit: fit;
    border-radius: 10px 10px 0 0;
    position: relative;
`;
const CardDescription = styled.div`
    padding: 10px;
`;
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardText = styled.div`
display: grid;
grid-area:content_title;
color:#fff;
font-weight:400;
letter-spacing:0.15em;
`;
const CardTitle = styled.p`
    font-weight: 600;
    margin:5px;
    color: rgba(0, 0, 0, 0.87);
`;
const CardSinger = styled.p`
    font-size: 14px;
    color: rgba(128, 128, 128, 0.97);
    margin:5px;
`;
const CardGenre = styled.div`
    font-size: 16px;
    background-color: #e83940;
    position: absolute;
    bottom: 6%;
    padding: 3px 5px;
    border-radius: 0 4px 4px 0;
    left: 0;
    color: #fff;
`;
const CardYear = styled.div`
position: absolute;
background-color: #f5f5f5;
max-width: 60px;
padding: 3px 6px;
font-size: 12px;
right: 3%;
bottom: 6%;
border-radius: 4px;
`;