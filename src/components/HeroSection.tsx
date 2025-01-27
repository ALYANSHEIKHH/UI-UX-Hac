import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <>
            {/* <div>
                <Image
                    src={"/images/hero-sec.png"}
                    alt="hero-section"
                    width={1440}
                    height={316}
                    className="w-full h-auto mt-20"
                />
            </div> */}
             <div className="relative">
   
     <Image
      src={"/Hero.png"}
      alt="hero-section"
      width={1440}
      height={316}
      className="w-full h-auto mt-20"
    />
  

  {/* Hero Text */}
  <div className="absolute inset-0 flex items-center ml-96 justify-center">
    <div className="bg-[#FFF3E3] rounded-lg p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-xs sm:max-w-md">
      <h6 className="font-bold text-base sm:text-lg text-gray-600 mb-2">
        New Arrival
      </h6>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#B88E2F] mb-4">
        Discover Our <br /> New Collection
      </h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        dolore.
      </p>
      <button className="bg-[#B88E2F] text-white py-2 px-6 sm:px-8 rounded-md hover:bg-[#a37c28] transition duration-300">
        BUY NOW
      </button>
    </div>
  </div>
</div>
            <h1 className='text-[32px] font-bold text-center mt-10'>Browse The Range</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='flex flex-wrap items-center justify-center mt-16 gap-8'>
                <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
                    <Image
                        src={"/images/img1.png"}
                        alt='img-1'
                        width={381}
                        height={480}
                        className="max-w-[100%] h-auto"
                    />
                    <h3 className='text-center text-2xl mt-6'>Dining</h3>
                </div>

                <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
                    <Image
                        src={"/images/img2.png"}
                        alt='img-2'
                        width={381}
                        height={480}
                        className="max-w-[100%] h-auto"
                    />
                    <h3 className='text-center text-2xl mt-6'>Living</h3>
                </div>

                <div className='flex flex-col items-center max-w-[300px] sm:max-w-[100%]'>
                    <Image
                        src={"/images/img3.png"}
                        alt='img-3'
                        width={381}
                        height={480}
                        className="max-w-[100%] h-auto"
                    />
                    <h3 className='text-center text-2xl mt-6'>Bedroom</h3>
                </div>
            </div>
        </>
    )
}

export default HeroSection