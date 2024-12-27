"use client"

import pagedata from "@/components/constants/data.json";
import { useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

export default function Technology() {
  const technology = pagedata.technology;

  const [selectedTechnology, setSelectedTechnology] = useState(technology[1]);
  const [changed, setChanged] = useState(true);

  const handleTechnologyChange = (
    name: {
      name: string,
      images: {
        portrait: string,
        landscape: string,
      },
      description: string,
    }) => {
        if (selectedTechnology === name) {
          return
        }
    setSelectedTechnology(name);
    setChanged(false)
    setTimeout(() => setChanged(true), 400);
  }


  return (
    <main className="relative h-screen">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/images/technology/background-technology-desktop.jpg" media="(min-width: 1024px)" />
        <img src="/images/technology/background-technology-tablet.jpg" alt="MDN" className="h-full w-full object-cover"/>
      </picture>
      <section className="section__destination lg:pr-0">
        <div>
        <p className="h2 text-white text-center md:text-left md:text-[20px] lg:text-[28px]"><span className="tracking-[15%] font-bold text-white/25 mr-6">03</span>SPACE LAUNCH 101</p>
        </div>
          <Transition as="div" className='flex flex-col lg:justify-between lg:flex-row-reverse h-full gap-8' show={changed} enter='ease-in duration-400' enterFrom="opacity-0 scale-95" enterTo='opacity-100  scale-100' leave='ease-out duration-400' leaveFrom="opacity-100 scale-100" leaveTo='opacity-0 scale-95'>
          <div className="relative -mx-6 md:-mx-10 lg:mx-0 lg:h-full flex lg:items-center lg:w-[45%]">
          <TransitionChild>
          <picture className="w-full p-0 flex justify-center max-h-[320px] lg:max-h-full">
            <source srcSet={selectedTechnology.images.portrait} media="(min-width: 1024px)" />
            <img src={selectedTechnology.images.landscape} alt={selectedTechnology.name} className="w-full"/>
          </picture>
          </TransitionChild>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[64px] lg:w-[55%]">
          <ul className='flex gap-4 lg:flex-col justify-center w-full lg:w-[80px] h5 font-ballefair text-color-3 mb-8 lg:mb-0 transition-all duration-700'>
                {technology.map((item, index) => (
                  <li key={index}  className={`transition-all duration-700 w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] flex justify-center items-center rounded-full border-color-3/30 border-[1px] ${selectedTechnology.name === item.name ? 'border-none bg-color-3 text-color-1' : ''} ${selectedTechnology.name !== item.name ? 'hover:border-color-3/70' : ''}`}><a className='transition-all duration-700 w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full cursor-pointer flex items-center justify-center' onClick={() => handleTechnologyChange(item)}>{index + 1}</a></li>
                ))}
          </ul>
          <TransitionChild>
          <div className="flex w-full flex-col justify-center text-center lg:text-left">
            <div className="flex flex-col gap-4 lg:gap-10 mb-6 lg:mb-12 uppercase font-ballefair">
              <p className="text-white/50 text-[18px] md:text-[24px] lg:text-[32px]">the terminology…</p>
              <h3 className="text-white text-[24px] md:text-[40px] lg:text-[56px] leading-[1.15em]">{selectedTechnology.name}</h3>
            </div>
            <p>{selectedTechnology.description}</p>
          </div>
          </TransitionChild>
          </div>
          </Transition>
      </section>
    </main>
  );
}