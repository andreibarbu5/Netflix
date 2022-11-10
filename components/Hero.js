import Image from "next/image";
import React from "react";
import lost from "../assets/lost.png";
import netflix from "../assets/netflix.png";
import background from "../assets/background.jpg";
const Hero = () => {
  return (
    <div>
      <div className="relative    h-[18rem] sm:h-[20rem] md:h-[27rem]  lg:h-[29.5rem] md:bg-black   overflow-hidden group ">
        <div className="absolute flex -right-[3rem] h-full md:-right-[7rem] ">
          <Image
            src={background}
            className="object-cover    md:w-[48rem]  group-hover:scale-[103%] lg:w-[65rem] duration-500 ease-out"
          />
        </div>

        <div
          id="thegrad"
          className=" relative z-10  p-8 sm:pl-12 sm:pt-2 pt-0 md:pt-7  flex flex-col items-start h-full grad "
        >
          {/* Logo/Title */}
          <div className=" w-[9rem] sm:w-full pt-10 relative  z-10">
            <Image
              src={lost}
              className="w-[11rem]  md:w-[17rem] lg:w-[19rem]"
            />
            <div className="absolute flex w-[13rem] h-[7rem] md:h-[10rem] md:w-[17rem] -top-7 md:-top-[3.2rem]  -left-[2.2rem] sm:-left-[1.2rem] md:-left-[0.3rem]">
              <Image src={netflix} />
            </div>
          </div>
          {/* Ratings */}
          <div className=" md:pt-4  lg:pt-4">
            <ul className="text-gray-200 flex flex-wrap gap-1 whitespace-nowrap text-[14px] md:text-[17px] pt-[0.5rem] sm:pt-[1rem] sm:space-x-1.5  max-w-[11rem] sm:max-w-full truncate md:items-center  ">
              <li>
                <p className="text-green-500  ">95% Match</p>
              </li>
              <li>
                <p className="">2018</p>
              </li>
              <li>
                <p className="">1 season</p>
              </li>
              <li>
                <p className="p-[0.2rem]  bg-black rounded-[0.3rem]  border border-gray-500 text-[8px] md:text-[10px] px-1 hover:text-white  hover:scale-[105%] duration:500 ease-out">
                  4k Ultra HD
                </p>
              </li>
              <li>
                <p className="p-[0.2rem]  bg-black rounded-[0.3rem]  border border-gray-500 text-[8px] md:text-[10px] px-1 hover:text-white  hover:scale-[105%] duration:500 ease-out">
                  5.1
                </p>
              </li>
            </ul>
          </div>
          {/* Description */}
          <div className="text-gray-300 text-[13px] sm:text-[15px] md:text-[18px] lg:text-[22px] pt-3 md:pt-2   max-w-[70vw] sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[45vw]">
            <p className="hover:text-white  hover:scale-[104%] ease-out duration-500  max-w-[27rem]  ">
              After crash-landing on an alien planet, the Robinson family fights
              agains all odds to survive and escape.
              <br />
              But ther're surrounded by hidden dangers.
            </p>
            <div className="hidden sm:block pt-2 md:pt-4 lg:pt-2  text-[12px] md:text-[14px]  lg:text-[16px] italic text-gray-400 ">
              <p>Molly Parker Toby Stephens, Max Jenkins</p>
              <p>TV Shows, TV Action & Adventure, TV Dramas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
