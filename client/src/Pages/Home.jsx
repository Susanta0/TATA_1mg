import React from "react";
import { UpperNavbar } from "../Components/UpperNavbar";
import { MIddleNavbar } from "../Components/MIddleNavbar";
import { DownNavbar } from "../Components/DownNavbar";
import { ImagesMaping } from "../Components/SlidersImages";
import { ayurvedaData, healthconcerns, healthDevices, popularCategories } from "../Data/healthconcerns";
import { Carousels } from "../Components/Carousels";
import { BodyCheck } from "../Components/BodyCheck";
import { bodyCheck, brands, pathology, personalCare, radiology } from "../Data/bodycheck";
import { Products } from "../Components/Products";

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
       <Products  heading="Collagen | supplement of the week" seeall="SEE ALL"/>
      <Carousels data={personalCare} heading="Personal care" seeall=""/>
       <BodyCheck data={pathology} heading="Pathology Tests | Up to 70% off" seeall="SEE ALL"/>
       <Products  heading="Trending now" seeall="SEE ALL"/>
       <Carousels data={popularCategories} heading="Popular categories" seeall=""/>
       <Products  heading="Skin care products" seeall="SEE ALL"/>
       <Products  heading="Popular Combo Deals" seeall="SEE ALL"/>
       <Products  heading="Top deals of pain relief and cough & cold" seeall="SEE ALL"/>
       <BodyCheck data={radiology} heading="Radiology Tests | Up to 60% off" seeall="SEE ALL"/>
       <Products  heading="Explore something new" seeall="SEE ALL"/>
       <Carousels data={ayurvedaData} heading="Ayurveda top brands" seeall="SEE ALL"/>
       <Products  heading="Deals of the day" seeall="SEE ALL"/>
       <BodyCheck data={bodyCheck} heading="Health Checkups" seeall=""/>
       <Products  heading="Tata 1mg health products" seeall="SEE ALL"/>
       <Products  heading="Summer essentials" seeall="SEE ALL"/>
       <Carousels data={healthDevices} heading="Healthcare devices - top brands" seeall=""/>
       <Products  heading="Optimum Nutrition top sellers" seeall="SEE ALL"/>
       <Products  heading="Super saving deals" seeall="SEE ALL"/>
      <div className="mt-20">
        <img src="../../public/footer.png" alt="" />
      </div>
    </>
  );
};
