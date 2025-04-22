import React from 'react'
import MainImageSection from '../components/MainImageSection'
import cultivation from "../images/cultivation.jpg"
import CultivationCardData from '../components/CultivationCardData';
// import CultivationCard from '../components/CultivationCard';
import styled from 'styled-components';

const Wrapper=styled.section``;


export default function Cultivation() {
  const title = "Cultivation Procees";
  const image=cultivation;
  const color="white";
  return (
    <Wrapper>
      <MainImageSection title={title} image={image} color={color}/>
      <CultivationCardData/>
    </Wrapper>
  )
}

