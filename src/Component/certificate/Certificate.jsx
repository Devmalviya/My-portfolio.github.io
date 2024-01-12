import React, { useState } from "react";

function Certification(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample data for certification items
  const certificationData = [
    {
      title: "DSA with Java Certification | Apna College ",
      imageUrl: "Certifications/javaCertification.jpeg",
    },
    {
      title: "React Js Frontedn dev.. | Udemy",
      imageUrl: "Certifications/ReactCertification.png",
    },
    {
      title: "Figma Certification | Udemy",
      imageUrl: "Certifications/figmaCertification.png",
    },
   
    // Add more items as needed
  ];

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="justify-center items-stretch bg-white flex flex-col mt-5 mb-5">
      <div className="items-stretch flex w-full justify-between gap-0 pr-11 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="justify-center items-stretch bg-black flex basis-[0%] flex-col pl-9 pr-9 ssm:pl-2 ssm:pr-2 max-md:px-5">
          <div className="justify-center items-center flex flex-col px-5 ">
            {/* <div className="bg-white self-stretch flex shrink-0 h-px flex-col" /> */}
            <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[57px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[57px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[57px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            {/* <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" /> */}
            {/* <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
            <div className="justify-center items-center bg-white self-stretch flex w-full shrink-0 h-[58px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" /> */}
          </div>
        </div>

        <div className="flex grow basis-[0%] flex-col py-5 items-start max-md:max-w-full">
          <div className="items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-between items-center flex gap-1">
              <div className="justify-center items-center bg-stone-500 flex ssm:w-[20px] w-[61px] shrink-0 h-[15px] flex-col my-auto" />
              <div className="text-black text-center text-2xl ssm:text-base sm:text-base font-semibold whitespace-nowrap justify-center items-stretch ring-2 ring-yellow-400 ring-inset  self-stretch grow px-2.5 ssm:px-1.5 sm:px-1.6 py-4 ssm:py-2 sm:py-2 rounded-xl">
                {" "}
                Certification's
              </div>
              <div className="text-white text-center text-2xl ssm:text-base sm:text-base font-semibold whitespace-nowrap justify-center items-stretch bg-black ring-2 ring-gray-500 ring-inset  grow px-5 py-4 ssm:py-2 sm:py-2 ssm:px-1.5 sm:px1.6 rounded-xl">
                0 Kilometer left
              </div>
            </div>
          </div>

          <div className="self-stretch mt-4 pt-8 px-4 max-md:max-w-full max-md:px-5">
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {/* Loop through certificationData to generate cards */}
              {certificationData.map((certification, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-stretch mb-8 max-md:w-full"
                >
                  <div className="items-stretch bg-white flex-grow flex flex-col pb-4 rounded-lg">
                    <div className="text-black text-sm ssm:text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg  font-bold whitespace-nowrap">
                      {certification.title}
                    </div>
                  </div>
                  <img
                    className="bg-zinc-300 flex-shrink-0 h-48 md:h-72 lg:h-72 xl:h-72 flex-col rounded-lg cursor-pointer"
                    src={certification.imageUrl}
                    alt={`Certification ${index + 1}`}
                    onClick={() => openImage(certification.imageUrl)}
                  />
                  <button
                    className="text-slate-900  align-middle text-sm font-light whitespace-nowrap bg-white px-4 py-2 rounded-md mt-2"
                    onClick={() => openImage(certification.imageUrl)}
                  >
                   <h4 className=" ring-1 ring-yellow-400 ring-inset w-[6rem] py-1 rounded-sm"> Open </h4>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal to display the selected image */}
      {selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative">
            <img
              className="max-h-full max-w-full"
              src={selectedImage}
              alt="Selected Image"
            />
            <button
              className="absolute top-10 right-4 p-2 ring-1 ring-yellow-400 ring-inset bg-yellow-50 text-black  w-[6rem] py-1 rounded-sm"
              onClick={closeImage}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certification;
