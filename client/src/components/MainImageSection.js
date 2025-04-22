import React from 'react'
import styled from 'styled-components';

const ImageSectionWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  height: 400px;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

`;

const Title = styled.h1`
  color: ${props => props.color};
  font-size: 65px;
  /* margin-bottom: 25px; */
`;

// const Subtitle = styled.p`
//   color: ${({ theme }) => theme.colors.gray};
//   font-size: 14px;
// `;

export default function MainImageSection(props) {
  return (
    <ImageSectionWrapper image={props.image}>
      <ContentWrapper>
        <Title color={props.color}>{props.title}</Title>
        {/* <Subtitle>{props.description}</Subtitle> */}
      </ContentWrapper>
    </ImageSectionWrapper>
  );
}
