"use client"

import Image from "next/image";
import pagedata from "@/components/constants/data.json";
import { useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

export default function Destination() {
  const destinations = pagedata.destinations;

  const [selectedPlanet, setSelectedPlanet] = useState(destinations[0]);
  const [changed, setChanged] = useState(true);

  const handlePlanetChange = (
    name: {
      name: string;
      images: {
        png: string,
        webp: string
      },
      description: string,
      distance: string,
      travel: string}) => {
        if (selectedPlanet === name) {
          return
        }
    setSelectedPlanet(name);
    setChanged(false)
    setTimeout(() => setChanged(true), 400);
  }


  return (
    <main className="relative h-screen">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/images/destination/background-destination-desktop.jpg" media="(min-width: 1024px)" />
        <img src="/images/destination/background-destination-tablet.jpg" alt="MDN" className="h-full w-full object-cover"/>
      </picture>
      <section className="section__destination">
        <div>
        <p className="h2 text-white text-center md:text-left md:text-[20px] lg:text-[28px]"><span className="tracking-[15%] font-bold text-white/25 mr-6">01</span>SO, YOU WANT TO TRAVEL TO</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between h-full gap-8">
          <Transition as="div" className='flex flex-col lg:flex-row lg:justify-between h-full gap-8' show={changed} enter='ease-in duration-400' enterFrom="opacity-0 scale-95" enterTo='opacity-100  scale-100' leave='ease-out duration-400' leaveFrom="opacity-100 scale-100" leaveTo='opacity-0 scale-95'>
          <div className="flex items-center justify-center lg:w-[540px] py-[27px] md:py-0">
          <TransitionChild as="a">
            <Image src={selectedPlanet.images.png} alt={selectedPlanet.name} width={480} height={480} priority className="max-w-[150px] max-h-[150px] md:max-w-[300px] md:max-h-[300px] lg:max-h-[480px] lg:max-w-[480px] transition-all duration-700"/>
            </TransitionChild>
          </div>
          <div className="flex items-start lg:justify-center lg:gap-10 justify-start flex-1 w-full flex-col">
          <ul className='flex w-full gap-8 justify-center lg:justify-start'>
          {destinations.map((item, index) => (
            <li className={`h-8 text-[14px] text-colot-2 font-barlowcon tracking-[0.15em] uppercase flex items-start relative ${selectedPlanet.name === item.name ? 'text-color-3 before:absolute before:bg-color-3 before:h-[3px] before:w-full before:bottom-0 before:left-0' : ''}`} key={index}><a className={`w-full h-full text-center relative hover:text-color-3 transition-all duration-300 cursor-pointer ${selectedPlanet.name !== item.name ? 'before:opacity-0 before:absolute hover:before:opacity-100 before:bg-color-3/60 before:h-[3px] before:w-full before:bottom-0 before:left-0 before:transition-all before:duration-300' : ''}`} onClick={() => handlePlanetChange(item)}>{item.name}</a></li>
          ))}
        </ul>
        <div className="mt-6">
          <div className="flex flex-col text-center lg:text-left gap-4 mb-6 lg:mb-10">
          <TransitionChild >
            <h1 className="text-white text-[56px] font-ballefair md:text-[80px] lg:text-[96px] leading-[1em]">{selectedPlanet.name.toUpperCase()}</h1>
            <p>{selectedPlanet.description}</p>
            </TransitionChild>
          </div>
          <div className="mb-6 lg:mb-10 h-[1px] w-full bg-color-6"/>
          <div className="flex uppercase text-center lg:text-left font-barlowcon text-[14px] tracking-[2px]">
          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <p>Avg. Distance</p>
            <TransitionChild >
            <span className='text-[28px] font-ballefair tracking-[0px] text-color-3'>{selectedPlanet.distance}</span>
            </TransitionChild>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-3'>
            <p>Est. Travel Time</p>
            <TransitionChild>
            <span className='text-[28px] font-ballefair tracking-[0px] text-color-3'>{selectedPlanet.travel}</span>
            </TransitionChild>
          </div>
          </div>
        </div>
          </div>
          </Transition>
        </div>
      </section>
    </main>
  );
}