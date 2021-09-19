import React from 'react';
import { connect} from 'react-redux';
import styled from 'styled-components';
import Card from './Card';

const mapStateToProps = (state) => {
    return {
        videosShown: state?.video?.videosShown ? state?.video?.videosShown : state?.video?.videos
    }
}

const Content = ({genres, videos, videosShown}) => {
    return (
        <>
        {
              (genres && videos && videosShown) &&
                <Section>
                    {
                    videosShown && videosShown.map((video) => {
                    return (
                        <Card key={video.id} video={video} image={video.image_url} genres={genres} />
                    );})
                    }
                </Section>
            }
        </>
        
    )
}
export default connect(mapStateToProps)(Content);

const Section = styled.div`
    height:100%; 
    width:100%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center;
    align-items: start;
    @media (max-width: 550px) {
    }
`;
