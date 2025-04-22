import React from 'react'
import CropSlides from '../components/CropSlides'
import MainImageSection from '../components/MainImageSection'
import service from "../images/Service.jpg"
import CultivationCardData from '../components/CultivationCardData';
// import Intro from '../components/Intro';
import CropRecomendation from '../components/CropRecomendation';

export default function Serv() {
  const title = "Services";
  const image=service;
  const color="white";
  return (
    <>
    <MainImageSection title={title} image={image} color={color}/>
    <CropSlides/>
    {/* <Intro/> */}
    <CultivationCardData/>
    <CropRecomendation/>
    </>

  )
}
