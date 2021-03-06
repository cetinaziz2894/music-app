import React from 'react'
import styled from 'styled-components';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { filterByMultipleGenre } from '../actions/video';
import useWindowDimensions from '../hook/useWindowDimensions';

const renderList = (list) => {
    return (list.map(data =>({label:data.name,value:data.id})))
}

function Filter() {
    const {genres} = useSelector(state => state.video);
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();
    return (
        <Section>
           <div style={{width: width > 768 ? '90%' : '100%'}}>
               {
                   genres && 
                   <Select 
                        options={renderList(genres)}
                        isMulti
                        onChange={(e) => dispatch(filterByMultipleGenre(Array.isArray(e) ? e.map(x => x.value) : []))}
                    />
               }

           </div>
        </Section>
    )
}

export default Filter

const Section = styled.div`
    height:100%; 
    width:100%;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media (max-width: 550px) {
        margin:5px 0px;
    }
`;