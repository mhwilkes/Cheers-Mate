import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { v1 as uuid } from 'uuid';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Create = () => {
  let history = useHistory();
  let id = uuid();
  return (
    <ContentContainer>
      <div className="hero-body">
        <div className="container has-text-centered has-text-weight-bold">
          <h1 className="title is-size-1">Create Meeting Room</h1>
          <h2 className="subtitle is-size-4 has-text-weight-bold">
            Click to Create Meeting
          </h2>
          <h2
            className="button is-info is-size-5"
            onClick={() => history.push(`/meeting/${id}`)}
          >
            Create Room
          </h2>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Create;
