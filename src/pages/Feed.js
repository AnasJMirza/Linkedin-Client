import React from 'react';
import styled from 'styled-components';
import Right from '../components/Right';

const Feed = () => {
    return (
        <Container>
            <LeftSection>Left</LeftSection>
            <FeedSection>Feed</FeedSection>
            <RightSection>
                <Right/>
                
            </RightSection>
        </Container>
    );
};


export default Feed;


const Container = styled.div`
    /* background-color: rgb(246, 246, 246); */

    display: flex;
    justify-content: space-between;
    padding: 10px 60px;
`;

const LeftSection = styled.div`
    flex: 2;
    border: 1px solid black;
`;
const FeedSection = styled.div`
    flex: 5;
    border: 1px solid black;
`;
const RightSection = styled.div`
    flex: 2;
    border: 1px solid black;
`;