import React from "react";
import { UpperNavbar } from "../Components/UpperNavbar";
import { MIddleNavbar } from "../Components/MIddleNavbar";
import { DownNavbar } from "../Components/DownNavbar";
import { ImagesMaping } from "../Components/SlidersImages";
import { healthconcerns } from "../Data/healthconcerns";
import { Carousels } from "../Components/Carousels";
import { BodyCheck } from "../Components/BodyCheck";

export const Home = () => {
  return (
    <>
      <UpperNavbar />
      <MIddleNavbar />
      <DownNavbar />
      <ImagesMaping />
      <Carousels data={healthconcerns} heading="Shop by health concerns" />
      <BodyCheck data={} heading="Full body health checkups"/>
    </>
  );
};
