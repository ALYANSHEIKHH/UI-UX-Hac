// import Hero from '@/components/hero'
// import Products from '@/components/products'
// import SubHero from '@/components/Shero'
// import Slides from '@/components/slides'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <Hero/>
//       <SubHero/>
//       <Products/>
//       <Slides/>
      
//     </div>
//   )
// }

// export default page
import  Link  from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
   
   <div className="relative">
  {/* Hero Image */}
  <div>
    <Image
      src={"/Hero.png"}
      alt="hero-section"
      width={1440}
      height={316}
      className="w-full h-auto mt-20"
    />
  </div>

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
      <div>
      <h1 className="text-[40px] text-center font-bold mt-14 mb-6">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl">
        {[
          {
            src: "/images/table.png",
            alt: "table-img",
            name: "Syltherine",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/chair.png",
            alt: "chair-img",
            name: "Leviosa",
            desc: "Stylish cafe chair",
            price: "Rp 2.500.000",
          },
          {
            src: "/images/sofa.png",
            alt: "sofa-img",
            name: "Lolito",
            desc: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/multi-sofa.png",
            alt: "multi-sofa-img",
            name: "Respira",
            desc: "Outdoor bar table and stool",
            price: "Rp 500.000",
          },
          {
            src: "/images/lamp.png",
            alt: "lamp-img",
            name: "Grifo",
            desc: "Night lamp",
            price: "Rp 1.500.000",
          },
          {
            src: "/images/black-sofa.png",
            alt: "black-sofa-img",
            name: "Muggo",
            desc: "Small mug",
            price: "Rp 150.000",
          },
          {
            src: "/images/pic-sofa.png",
            alt: "pic-sofa-img",
            name: "Pingky",
            desc: "Cute bed set",
            price: "Rp 14.000.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/orange-sofa.png",
            alt: "orange-sofa-img",
            name: "Potty",
            desc: "Minimalist flower pot",
            price: "Rp 500.000",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto group"
          >
            <Image
              src={product.src}
              alt={product.alt}
              width={285}
              height={301}
              className="group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="text-white text-[16px] font-semibold bg-[#B88E2F] py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
            <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
              {product.name}
            </h3>
            <p className="ml-6">{product.desc}</p>
            <span className="text-[20px] font-semibold mr-6 ml-6">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-[16px] line-through">{product.oldPrice}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <Link href="/product">
          <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#B88E2F]">
            Show More
          </button>
        </Link>
      </div>
     

        <div className='h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around'>
          <div className='text-center lg:text-left px-6 lg:px-0'>
            <h1 className='text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]'>
              50+ Beautiful rooms inspiration
            </h1>
            <p className='text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]'>
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>
            <button className='w-[70%] md:w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] mt-8'>
              Explore More
            </button>
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/images/img6.png"
              alt="last-1"
              width={404}
              height={582}
              className="w-full lg:w-[404px] lg:h-[582px]"
            />
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/images/img5.png"
              alt="last-1"
              width={372}
              height={486}
              className="w-full lg:w-[372px] lg:h-[486px]"
            />
          </div>
        </div>

        <div className="h-auto mt-32 px-6 md:px-16 lg:px-32">
          <h3 className="text-center text-[18px] sm:text-[20px]">Share your setup with</h3>
          <h1 className="text-center text-[30px] sm:text-[40px] font-bold">#FuniroFurniture</h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-8">

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src="/images/last1.png"
                alt="last-1"
                width={451}
                height={312}
                className="mb-5"
              />
              <Image
                src="/images/last2.png"
                alt="last-2"
                width={451}
                height={312}
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/last3.png"
                alt="last-3"
                width={295}
                height={392}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Image
                src="/images/last4.png"
                alt="last-4"
                width={420}
                height={348}
                className="mb-5 pt-8 lg:pt-32"
              />
              <div className="flex justify-between gap-5">
                <Image
                  src="/images/last5.png"
                  alt="last-5"
                  width={178}
                  height={242}
                />
                <Image
                  src="/images/last6.png"
                  alt="last-6"
                  width={258}
                  height={196}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/last7.png"
                alt="last-7"
                width={425}
                height={433}
              />
            </div>
          </div>
          
        </div>

      </div>


    </>
  )
}

export default page