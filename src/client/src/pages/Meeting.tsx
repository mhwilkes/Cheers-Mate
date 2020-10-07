import React from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Meeting = () => {
    let history = useHistory();
    let id = '1202340234';
    return (
        <ContentContainer>
            <div className="hero-body">
                <div className="container has-text-centered has-text-weight-bold">
                    <h1 className="title is-size-1">
                        Create Meeting Room
                    </h1>
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

export default Meeting;