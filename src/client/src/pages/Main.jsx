import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContentContainer = styled.div`
  text-align: center;
`;

const Header = styled.h1`
  color: #000;
`;

const SubHeader = styled.h2`
  color: #426cb4 !important;
`;

const Button = styled.h2`
  background-color: #426cb4 !important;
`;

const Main = () => {
  let history = useHistory();
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <Header className="title is-size-1">Welcome to Cheers Mate!</Header>
          <SubHeader className="subtitle is-size-4 has-text-weight-bold">
            We've made it easier to chat with your mates!
          </SubHeader>
          <Button
            className="button is-info is-size-5"
            onClick={() => history.push('/create')}
          >
            Go Chat
          </Button>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Main;
