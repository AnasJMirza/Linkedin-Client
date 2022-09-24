import React from 'react';
import styled from 'styled-components';

const Feed = () => {
    return (
        <Container>
            <LeftSection>Left</LeftSection>
            <FeedSection>Feed</FeedSection>
            <RightSection>Right</RightSection>
        </Container>
    );
};


export default Feed;


const Container = styled.div`
    background-color: rgb(246, 246, 246);
    height: 100vh;

    display: flex;
    justify-content: space-between;
    padding: 10px 60px;
`;

const LeftSection = styled.div``;
const FeedSection = styled.div``;
const RightSection = styled.div``;