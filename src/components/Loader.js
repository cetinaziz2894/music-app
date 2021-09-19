import React from 'react'
import styled from 'styled-components';

function Loader() {
    return (
        <Section>
            <div className="loader"><div></div><div></div><div></div></div>
        </Section>

    )
}

export default Loader

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction:grid;
    justify-content:center;
    align-items:center;
`;