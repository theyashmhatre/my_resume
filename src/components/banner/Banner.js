import React from 'react'
import MainBanner from './MainBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-20 pb-20 flex flex-col gap-10 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
      <MainBanner />
    </section>
  );
}

export default Banner