import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';
import { connect, useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../actions/video';


const renderList = (list) => {
    return (list.map(data =>({label:data.name,value:data.id})))
}


const mapStateToProps = (state) => {
    return {
        videosShown: state?.video?.videos.slice(0,20),
        genres:state?.video?.genres,
        videos:state?.video?.videos
    }
}

function Sort() {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.video);

    return (
       <Section>
           <div style={{width:'90%'}}>
            {
                   genres && 
                   <Select 
                        isClearable="true"
                        options={renderList(genres)}
                        onChange={(e) => {
                            const value = e ? e.value : null;
                            dispatch(filterByGenre(value))}}
                    />
               }
           </div>
       </Section>
    )
}

export default connect(mapStateToProps)(Sort);

const Section = styled.div`
    height:100%;    
    width:50%;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media (max-width: 550px) {
    }
`;
