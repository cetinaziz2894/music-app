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
              (genres && videos && videosShown.length > 0) &&
                <Section>
                    {
                    videosShown && videosShown.map((video) => {
                    return (
                        <Card key={video.id} video={video} image={video.image_url} genres={genres} />
                    );})
                    }
                </Section>
        }
        {
            videosShown.length === 0 && 
            <Section>
                <Message>No Data Found !</Message>
            </Section>
        }
        </>
        
    )
}
export default connect(mapStateToProps)(Content);

const Section = styled.div`
    height:100%; 
    width:100%;
    display: initial;
    text-align: center;
`;

const Message = styled.p`
    color:#e88888;
    box-shadow: 10px 10px 40px 2px rgba(128, 128, 128, 0.4);
    padding:10px;
`;