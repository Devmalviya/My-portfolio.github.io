import React from "react";

const imageSources = [
  "Imges/Figma - png.png",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/37a7b094-b42c-4a13-9dc1-140cbb086683?",
  "Imges/Adobe XD Elements - png.png",
  "Imges/illustrator.png",
  "Imges/JavaScript Tutorial - png 0.png",
  "Imges/Tailwind CSS - jpeg 0.png",
  "Imges/React - png.png",
  "Imges/bootstrap.png",
  "Imges/mern1.png"
];

function About() {
  return (
    <div className=" flex items-stretch justify-between ssm:pr-3 sm:pr-4 pr-20 max-md:flex-wrap max-md:pr-5">
      <div className="items-center justify-between ssm:px-3  sm:px-5 bg-stone-400 flex flex-col px-9 py-12 max-md:px-5">
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            className="aspect-square object-contain object-center w-[50px] overflow-hidden mt-5"
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>

      <div className="flex grow basis-[0%]  xl:mt-10  ssm:mb-20 sm:ml-4 flex-col mt-[2rem] ssm:mt-5 ssm:w-[18rem] ssm:mr-4 ssm:ml-0 self-start max-md:max-w-full max-md:mt-10">
        <div className="w-[400px] max-w-full self-start">
          <div className="gap-5 sm:gap-10 ssm:items-start sm:items-start flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[43%] max-md:w-full max-md:ml-0">
              <div className="text-black ssm:ml-4 sm:ml-8 ssm:text-2xl ssm:py-2  sm:text-2xl text-center z-20 ml-12 text-2xl font-semibold whitespace-nowrap justify-center items-stretch bg-yellow-400 grow w-full mt-11 px-2.5 py-4 max-md:mt-10">
                About me
              </div>
            </div>
            <img
              alt="About Image 1"
              src="Imges\about img 1.png"
              className="aspect-[0.88] ssm:ml-9 sm:w-[150px] sm:ml-20  object-contain object-center w-[125px] overflow-hidden self-center max-w-full mt-4"
            />
            <div className="flex flex-col ssm:hidden sm:hidden items-stretch w-[57%] z-0 max-md:w-full max-md:ml-0">
              <div className="bg-black ssm:hidden flex w-[200px] z-0 shrink-0 max-w-full h-[70px] flex-col mx-auto" />
            </div>
          </div>
        </div>
        <div className="text-black ml-8 ssm:ml-4  sm:ml-0 ssm:text-base sm:text-base text-justify leading-7 text-2xl font-medium self-stretch whitespace-nowrap mt-5 max-md:max-w-full">
          Welcome to my little corner of the web!
        </div>
        <div className="text-black ssm:text-[15px] ssm:ml-4  sm:ml-0 ml-8  sm:text-base text-justify text-lg sm:font-normal leading-7 self-stretch mt-[1rem] max-md:max-w-full">
          I'm a designer and developer who's all about creating cool design and
          developing websites that people love to use. <br />
          <br />
          Got a tricky problem? No worries! I love solving puzzles and finding
          smart solutions to make your project shine. Whether you'restarting a
          new venture or just need a fresh look online, I've got your back.{" "}
          <br />
          <br />
          Let's team up, have some fun, and make something great together.
          Thanks for stopping by, and I can't wait to chat about your next big
          idea! Thanks for visiting | 😊
        </div>
      </div>
      <img
        alt="About Image 1"
        src="Imges/aboutImg.jpg"
        className="aspect-[0.91] ssm:hidden sm:hidden md:hidden xl:ml-[10rem] object-contain object-center w-full max-w-1/2 h-auto overflow-hidden self-center grow basis-[0%] my-auto max-md:max-w-full"
      />
    </div>
  );
}

export default About;
