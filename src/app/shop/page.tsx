import React from 'react'
import Image from 'next/image'

const ShopPage = () => {
    return (
        <>
            <div>
        <Image
          src={"/images/shop.svg"}
          alt="shop"
          width={1440}
          height={316}
          className="w-full h-auto mt-20"
        />
      </div>
            <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-evenly space-x-4 sm:space-x-8 w-full">
                    <Image
                        src="/images/dotted-line.svg"
                        alt="dotted-line"
                        width={25}
                        height={25}
                    />
                    <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3>
                    <Image
                        src="/images/four-dot.svg"
                        alt="four-dot"
                        width={25}
                        height={25}
                    />
                    <Image
                        src="/images/square-line.svg"
                        alt="square-line"
                        width={25}
                        height={25}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between sm:space-x-4 mt-2 sm:mt-0 w-full">
                    <span className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</span>
                    <span className="text-xs sm:text-sm md:text-base">Show</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                    </div>

                    <span className="text-xs sm:text-sm md:text-base">Short by</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">Default</h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl">
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
          {
            src: "/images/chair.png",
            alt: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/sofa.png",
            alt: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            oldPrice: "Rp 3.500.000",
          },
          {
            src: "/images/multi-sofa.png",
            alt: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            oldPrice: null,
          },
          {
            src: "/images/table.png",
            alt: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            oldPrice: "Rp 3.500.000",
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

      {/* <div className="flex items-center justify-center mt-6">
        <Link href="/product">
          <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#B88E2F]">
            Show More
          </button>
        </Link>
      </div> */}
     

            
            

            <div className='flex items-center justify-center gap-8 mt-14'>
                <div className='w-[60px] h-[60px] bg-[#B88E2F] text-white flex items-center justify-center'>1</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>2</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>3</div>
                <div className='w-[60px] h-[60px] bg-[#F9F1E7] flex items-center justify-center'>Next</div>
            </div>
        </>
    )
}

export default ShopPage