import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const ButtonGroup = styled.div`
  margin: 20px;
`;

const Button = styled.button`
  margin: 5px;
`;

const Main = () => {
  const history = useHistory();

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
