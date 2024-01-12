import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="  ssm:pl-4 sm:pl-6 justify-end items-stretch bg-white flex flex-col pl-20 max-md:pl-5">
      <div className=" xl:pt-8 flex justify-between gap-5 ml-4   max-md:max-w-full max-md:flex-wrap">
        <div className="  ssm:mr-0 ssm:max-w-[390px] lg:items-start flex  basis-[0%] flex-col my-auto max-md:max-w-full mr-[7rem]">
          <img
            src="Imges/circular image.png"
            className=" ssm:mt-5 ssm:mb-5 mt-5 mb-5 aspect-[0.98] object-contain object-center w-[145px] overflow-hidden max-w-full lg:hidden xl:hidden"
          />
          <div className="text-black ssm:text-3xl sm:text-4xl text-5xl font-bold leading-[58px] self-stretch max-md:text-4xl max-md:leading-[54px]">
            Hi, I’m Dev Malviya
          </div>
          <div className="text-black ssm:text-2xl sm:text-2xl text-3xl font-semibold leading-10 self-stretch mt-2.5 max-md:max-w-full">
            Designer & Developer
          </div>
          <svg
            className="ssm:mt-5 ml-12 sm:hidden md:hidden lg:hidden xl:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="280"
            height="4"
            viewBox="0 0 261 4"
            fill="none"
          >
            <path
              d="M0 2L261 2"
              stroke="#FDC500"
              stroke-opacity="0.93"
              stroke-width="3"
            />
          </svg>
          <svg
            className=" mt-5 ml-12 ssm:hidden md:hidden lg:hidden xl:hidden "
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="4"
            viewBox="0 0 552 4"
            fill="none"
          >
            <path
              d="M0 2L552 2"
              stroke="#FDC500"
              stroke-opacity="0.93"
              stroke-width="3"
            />
          </svg>
          <svg
            className=" mt-5 ml-12 sm:hidden ssm:hidden "
            xmlns="http://www.w3.org/2000/svg"
            width="552"
            height="4"
            viewBox="0 0 552 4"
            fill="none"
          >
            <path
              d="M0 2L552 2"
              stroke="#FDC500"
              stroke-opacity="0.93"
              stroke-width="3"
            />
          </svg>
          <div className="text-black mb-3 ssm:text-lg sm:text-xl ssm:justify-center text-2xl font-medium leading-7 self-stretch mt-6 max-md:max-w-full">
            Welcome to my Creative Universe,
          </div>
          <div className="text-black  text-justify font-normal ssm:text-base sm:text-lg text-lg  leading-7 self-stretch mt-[0.5rem] max-md:max-w-full">
            I design websites and user interfaces. I also do logo designing.
            <br />
            <br />
            Feel free to browse my work. and I hope my
            work ignites your passion for design and development! Have a nice
            day and be creative.
          </div>

          <div className="items-stretch flex   w-50 max-w-full gap-3 mt-6 self-start ssm:justify-center sm:justify-center max-md:justify-center">
            <div className="items-center bg-white flex aspect-[1.02] flex-col">
              <a
                href="https://www.linkedin.com/in/dev-malviya/"
                target="_blank"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51867b96-3a70-4301-9fbc-531503227564?"
                  className="aspect-[1.02] object-contain object-center w-[51px] overflow-hidden"
                  alt="Icon 1"
                />
              </a>
            </div>
            <div className="items-center bg-white flex aspect-square flex-col">
              <a href="https://dribbble.com/div-Makers" target="_blank">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77f1539c-1f44-4551-8976-b92f9135ac60?"
                  className="aspect-square object-contain object-center w-[50px] overflow-hidden"
                  alt="Icon 2"
                />
              </a>
            </div>
            <div className="items-center flex aspect-[1.02] flex-col">
              <a href="https://github.com/Devmalviya" target="_blank">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/989bccc27a2a61a4c78fc088845a49b4cb7557060335af4551dd055fdbfcaaba?"
                  className="aspect-[1.02] object-contain object-center w-[50px] overflow-hidden items-center"
                  alt="Icon 3"
                />
              </a>
            </div>
            <div className="items-center flex aspect-[1.02] flex-col">
              <a href="#" target="_blank">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe5d81f8fe72e7ad0e632d8b65275db3fc054822e54ee012699cefbee73e35c5?"
                  className="aspect-square object-contain object-center w-[50px] fill-white overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </a>
            </div>
            <div className="items-center flex aspect-[1.02] flex-col">
              <a href="https://twitter.com/Dev_M01" target="_blank">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1888b9b17efafeb1aa3cd6d66eb538db47aeae96cc2d293ec3998f334e9204c3?"
                  className="aspect-square object-contain object-center w-[50px] fill-white overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </a>
            </div>

            <div className="items-center  flex aspect-[1.02] flex-col ">
              <a href="Resume\Dev Malviya resume.pdf" target="_blank">
                <button className="text to-black mt-1 ring-1 ring-yellow-400 ring-inset hover:bg-yellow-400 hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 hover: ">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-black sm:hidden md:hidden self-stretch flex grow basis-[0%] flex-col py-10 max-w-[400px] ssm:hidden">
          <img
            src="Imges/profilePhoto.png" // Corrected the path
            className="ssm:hidden sm:hidden md:hidden aspect-[0.79] object-contain object-center w-full h-full max-w-[330px] mt-3 mb-6 ml-[-8rem]"
            alt="Profile Photo"
          />
        </div>
      </div>
      <div className="bg-yellow-400 z-[1] md:hidden sm:hidden flex w-[200px] shrink-0 h-[70px] mb-1.35 mt-[-30px] flex-col self-end ssm:hidden" />
    </div>
  );
}

export default Profile;
