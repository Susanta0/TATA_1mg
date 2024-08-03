import React from "react";
import { UpperNavbar } from "../Components/UpperNavbar";
import { MIddleNavbar } from "../Components/MIddleNavbar";
import { DownNavbar } from "../Components/DownNavbar";
import { ImagesMaping } from "../Components/SlidersImages";
import { ayurvedaData, healthconcerns, healthDevices, popularCategories } from "../Data/healthconcerns";
import { Carousels } from "../Components/Carousels";
import { BodyCheck } from "../Components/BodyCheck";
import { bodyCheck, brands, pathology, personalCare, radiology } from "../Data/bodycheck";

export const Home = () => {
  return (
    <>
      <UpperNavbar />
      <MIddleNavbar />
      <DownNavbar />
      <ImagesMaping />
      <Carousels data={healthconcerns} heading="Shop by health concerns" seeall="" />
      <BodyCheck data={bodyCheck} heading="Full body health checkups" seeall="SEE ALL"/>
      <Carousels data={brands} heading="Featured brands" seeall="SEE ALL"/>
       <div className="h-40">
       </div>
       <Carousels data={personalCare} heading="Personal care" seeall=""/>
       <BodyCheck data={pathology} heading="Pathology Tests | Up to 70% off" seeall="SEE ALL"/>
       <Carousels data={popularCategories} heading="Popular categories" seeall=""/>
       <BodyCheck data={radiology} heading="Radiology Tests | Up to 60% off" seeall="SEE ALL"/>
       <Carousels data={ayurvedaData} heading="Ayurveda top brands" seeall="SEE ALL"/>
       <BodyCheck data={bodyCheck} heading="Health Checkups" seeall=""/>
       <Carousels data={healthDevices} heading="Healthcare devices - top brands" seeall=""/>

    </>
  );
};
