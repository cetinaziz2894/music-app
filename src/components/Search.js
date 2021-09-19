import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { filterByName } from '../actions/video';

const mapDispatchToProps = (dispatch) => {
  return {
      onSearch: (value) => dispatch(filterByName(value)),
  }
}

const Search = ({onSearch}) => {
  const [value, setValue] = useState()
    return (
        <Section>
            <SearchInput placeholder="Search" value={value} onChange={(e) => {
              setValue(e.target.value)
              onSearch(e.target.value)}
              } />
        </Section>
    )
}

export default connect(null, mapDispatchToProps)(Search)

const Section = styled.div`
  display: grid;
  height:100%;
  width:100%;
  text-align: center;
  @media (max-width: 550px) {
  }
`;

const SearchInput = styled.input`
  height:50%;
  margin:20px 0px;
  border:none;
  border-radius:5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  text-indent: 10px;
  &:focus {
    outline: none;
}
`