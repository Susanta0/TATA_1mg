import React from 'react'
import { UpperNavbar } from '../Components/UpperNavbar'
import { MIddleNavbar } from '../Components/MIddleNavbar'
import { DownNavbar } from '../Components/DownNavbar'
import { ImagesMaping } from '../Components/SlidersImages'
import { Productbar } from '../Components/Productbar'
import { healthconcerns } from '../Data/healthconcerns'

export const Home = () => {
  return (
    <>
    <UpperNavbar/>
    <MIddleNavbar/>
    <DownNavbar/>
    <ImagesMaping/>
   
    <Productbar/>
    </>
  )
}
