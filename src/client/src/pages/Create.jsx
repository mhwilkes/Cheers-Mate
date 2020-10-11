import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { v1 as uuid } from 'uuid';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Button = styled.h2`
  background-color: #426cb4 !important;
`;

const Header = styled.h1`
  color: #000;
`;

const SubHeader = styled.h2`
  color: #426cb4 !important;
`;

const Create = () => {
  let history = useHistory();
  let id = uuid();
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <Header className="title is-size-1">
            You are on your way to creating your own meeting room!
          </Header>
          <SubHeader className="subtitle is-size-4 has-text-weight-bold">
            Click this button to create your own room.
          </SubHeader>
          <Button
            className="button is-info is-size-5"
            onClick={() => history.push(`/meeting/${id}`)}
          >
            Start Here
          </Button>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Create;
