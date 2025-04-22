import React from "react";
import SlideShow from "../components/SlideShow";
import Intro from "../components/Intro";
import CropSlides from "../components/CropSlides";
import CardSection from "../components/CardSection";
import VideoSection from "../components/VideoSection";
import ContactUs from "../components/ContactUs";
import RecomendCard from "../components/RecomendCard";
// import Experts from "../components/Experts";
// import Chatbot from "../components/Chatbot";
// import FloatingButton from "../components/FloatingButton";

export default function Home() {
  return (
    <>
      <SlideShow />
      <Intro />
      <CardSection />
      <VideoSection />
      <CropSlides />
      <RecomendCard />
      <ContactUs />
    </>
  );
}
