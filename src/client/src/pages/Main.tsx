import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Main = () => {

  // TODO: save UUID somewhere appropriate, add page for 
  return (
    <ContentContainer>
      <h1 className="title is-1">Welcome to Pod 1.2.0 Hackathon Title</h1>
      <p>
        WebRTC prototype service to allow people that are lonely to talk during Covid-19. 🚀🤩
      </p>
      <button onClick={ () => alert(uuidv4()) }>Create Room</button>
    </ContentContainer>
  );
};

export default Main;
