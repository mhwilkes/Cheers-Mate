import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;
  margin: 10vh auto;
  width: 80vw;
`;

const Meeting = () => {

    return (
        <ContentContainer>
            <h1 className="title is-1">Meeting Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet enim sed magna ullamcorper
                blandit. Phasellus ultricies condimentum dui non porta. Nulla varius hendrerit tincidunt. Nullam in
                tempor quam, at interdum turpis. Vivamus nunc nisl, eleifend luctus hendrerit eget, tincidunt a turpis.
                Morbi varius dolor nec justo semper elementum. Sed malesuada congue est, id posuere arcu interdum nec.
                Integer ipsum leo, facilisis in efficitur ut, sagittis in ex.
            </p>
        </ContentContainer>
    );
};

export default Meeting;