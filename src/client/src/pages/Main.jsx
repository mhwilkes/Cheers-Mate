import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ContentContainer = styled.div`
  text-align: center;
`;

const Main = () => {
  let history = useHistory();
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <h1 className="title is-size-1">This is the title</h1>
          <h2 className="subtitle is-size-4 has-text-weight-bold">
            This is the subtitle
          </h2>
          <h2
            className="button is-info is-size-5"
            onClick={() => history.push('/create')}
          >
            Create Room
          </h2>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Main;
