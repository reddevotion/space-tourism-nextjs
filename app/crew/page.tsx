"use client"

import Image from "next/image";
import pagedata from "@/components/constants/data.json";
import { useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

export default function Crew() {
  const crew = pagedata.crew;

  const [selectedCrewMember, setSelectedCrewMember] = useState(crew[0]);
  const [changed, setChanged] = useState(true);

  const handleCrewMemberChange = (
    name: {
      name: string,
      images: {
        png: string,
        webp: string
      },
      role: string,
      bio: string
    },) => {
        if (selectedCrewMember === name) {
          return
        }
    setSelectedCrewMember(name);
    setChanged(false)
    setTimeout(() => setChanged(true), 400);
  }


  return (
    <main className="relative h-screen">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/images/crew/background-crew-desktop.jpg" media="(min-width: 1024px)" />
        <img src="/images/crew/background-crew-tablet.jpg" alt="MDN" className="h-full w-full object-cover"/>
      </picture>
      <section className="section__destination">
        <div>
        <p className="h2 text-white text-center md:text-left md:text-[20px] lg:text-[28px]"><span className="tracking-[15%] font-bold text-white/25 mr-6">02</span>MEET YOUR CREW</p>
        </div>
          <Transition as="div" className='flex flex-col justify-between lg:flex-row lg:justify-between h-full gap-8' show={changed} enter='ease-in duration-400' enterFrom="opacity-0 scale-95" enterTo='opacity-100  scale-100' leave='ease-out duration-400' leaveFrom="opacity-100 scale-100" leaveTo='opacity-0 scale-95'>
          <div className="lg:w-1/2 flex flex-col justify-between pb-10 gap-6">
            <div className="font-ballefair flex flex-1 flex-col gap-4 text-center lg:text-left justify-center">
            <TransitionChild>
              <p className="text-white/50 uppercase text-[18px] md:text-[24px] lg:text-[32px]">{selectedCrewMember.role}</p>
              <h3 className="text-white uppercase text-[24px] md:text-[40px] lg:text-[56px]">{selectedCrewMember.name}</h3>
              <p className="mt-2 font-barlow">{selectedCrewMember.bio}</p>
              </TransitionChild>
            </div>
            <ul className='flex h-[10px] lg:h-[15px] justify-center gap-4 lg:justify-start lg:gap-10 mt-16 md:mt-8 lg:mt-auto lg:mb-2 transition-all duration-700'>
                {crew.map((item, index) => (
                  <li key={index} onClick={() => handleCrewMemberChange(item)} className={`transition-all duration-700 cursor-pointer h-full w-[10px] lg:w-[15px] rounded-full  ${selectedCrewMember.name === item.name ? 'bg-color-3/100' : 'bg-color-3/30'} ${selectedCrewMember.name !== item.name ? 'hover:bg-color-3/60' : ''}`}></li>
                ))}
              </ul>
          </div>
          <div className="lg:w-1/2 sosal">
          <TransitionChild as="a">
          <Image  src={selectedCrewMember.images.webp} alt={selectedCrewMember.name} width={768} height={1024} className="object-contain max-h-[350px] md:max-h-[560px] lg:max-h-[676px] transition-all duration-700"/>
          </TransitionChild>
          </div>
          </Transition>
      </section>
    </main>
  );
}