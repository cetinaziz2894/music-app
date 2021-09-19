import './App.css';
import Content from './components/Content';
import Filter from './components/Filter';
import Search from './components/Search';
import Sort from './components/Sort';
import styled from "styled-components";
import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGenres, getVideos } from './actions/video';
import Loader from './components/Loader';

const mapStateToProps = (state) => {
  return {
      genres:state?.video?.genres,
      videos:state?.video?.videos
  }
}

const App = ({videos,genres}) => {
  const [isGenresLoaded, setIsGenresLoaded] = useState(false);
    const [isVideosLoaded, setIsVideosLoaded] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideos())
        .then(() => {
            setIsVideosLoaded(true);
        })
        .catch(() => {
            setIsVideosLoaded(false);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      useEffect(() => {
        dispatch(getGenres())
        .then(() => {
            setIsGenresLoaded(true);
        })
        .catch(() => {
            setIsGenresLoaded(false);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
      <>
        {
              (isVideosLoaded && isGenresLoaded && videos && genres) ?
              <Container>
                <SearchPart>
                  <Search videos={videos} genres={genres}/>
                </SearchPart>
                <FilterPart>
                  <Filter videos={videos} genres={genres} />
                  <Sort />        
                </FilterPart>
                <ContentPart>
                  <Content videos={videos} genres={genres} />
                </ContentPart> 
              </Container>: 
              <Loader />
            }
      </>
  );
}

export default connect(mapStateToProps)(App);
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: 80px 60px auto;
  grid-template-areas:
    "search search search search"
    "filter filter filter filter"
    "content content content content";
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr 0.1fr auto;
    grid-template-areas:
      "search"
      "filter"
      "content";
  }
`;

const Part = styled.div`
  height:100%;
  width:80%;
  display:flex;
  place-self: center;
  align-items:center;
  justify-content:center;
`;

const SearchPart = styled(Part)`
  grid-area:search;
  flex-direction:column;
`;

const FilterPart = styled(Part)`
  grid-area:filter;
  flex-direction:row;
`;


const ContentPart = styled(Part)`
  grid-area:content;
`;