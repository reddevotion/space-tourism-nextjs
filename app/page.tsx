import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/images/home/background-home-desktop.jpg" media="(min-width: 1024px)" />
        <img src="/images/home/background-home-tablet.jpg" alt="MDN" className="h-full w-full object-cover"/>
      </picture>
      <section className="section__home">
        <div className="flex lg:w-1/2 w-full flex-col gap-6 text-center max-md:h-1/2 lg:text-left">
          <p className="h2 text-color-2">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="h1">SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="lg:w-1/2 max-md:h-1/2 w-full flex justify-center items-center lg:justify-end">
        <Link className="text-[18px] lg:mb-7 md:text-[32px] font-ballefair uppercase w-[9rem] h-[9rem] md:w-[272px] md:h-[272px] text-color-1 rounded-full bg-white grid place-content-center hover:scale-90 hover:text-color-1/60 transition-all duration-700 relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full before:bg-white before:bg-opacity-50 hover:before:scale-150 before:-z-[1] before:transition-all before:duration-700" href="/destination">
          explore
          </Link>
        </div>
      </section>
    </main>
  );
}
