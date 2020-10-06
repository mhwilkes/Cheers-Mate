import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Main = () => {

  return (
    <ContentContainer>
      <h1 className="title is-1">Welcome to Pod 1.2.0 Hackathon Title</h1>
      <p>
        WebRTC prototype service to allow people that are lonely to talk during Covid-19. 🚀🤩
      </p>
    </ContentContainer>
  );
};

export default Main;
