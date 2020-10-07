import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Create = (props: { match: any; }) => {
    const {match} = props;
    return (
        <ContentContainer>
            <div className="hero-body">
                <div className="container has-text-centered has-text-weight-bold">
                    <h1 className="title is-size-1">
                        This is meeting room
                    </h1>
                    <h2 className="subtitle is-size-4 has-text-weight-bold">
                        Room ID: {match.params.id}
                    </h2>

                </div>
            </div>
        </ContentContainer>
    );
};

export default Create;