import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      {/* Hero Image */}
      <div className="relative w-full h-full">
        <Image
          src="/Hero.png"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
          className="w-full h-full"
        />
      </div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex items-center ml-96 justify-center">
        <div className="bg-[#FFF3E3] rounded-lg p-8 md:p-16 text-center max-w-md">
          <h6 className="font-bold text-lg text-gray-600 mb-2">New Arrival</h6>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#B88E2F] mb-4">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <button className="bg-[#B88E2F] text-white py-2 px-8 rounded-md hover:bg-[#a37c28] transition duration-300">
            BUY NOW
          </button>
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
                </div>
  );
}
