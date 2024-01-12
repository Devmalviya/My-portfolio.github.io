import * as React from "react";

function Cart({ title, imageSrc, onOpen, index }) {
  return (
    <div className="self-stretch  mt-2 pt-4 px-4 max-md:max-w-full max-md:px-5">
      {/* Loop through certificationData to generate cards */}
      <div
        key={index}
        className="flex flex-col items-stretch mb-8 max-md:w-full"
      >
        <div className="items-stretch bg-white flex-grow flex flex-col p-4 rounded-lg">
          <div className="text-black text-xl font-bold whitespace-nowrap">
            {title}
          </div>
        </div>
        <img
          className="bg-zinc-300 flex-shrink-0  cursor-pointer h-50 flex-col rounded-lg"
          src={imageSrc}
          onClick={onOpen}
        />
        <button
          className="text-slate-900 cursor-pointer text-sm font-light whitespace-nowrap bg-white px-4 py-2 rounded-md mt-2"
          onClick={onOpen}
        >
          Open
        </button>
      </div>
    </div>
  );
}

function DesignProject(props) {
  const [openedImage, setOpenedImage] = React.useState(null);

  const openImage = (imageUrl) => {
    setOpenedImage(imageUrl);
  };

  const closeImage = () => {
    setOpenedImage(null);
  };

  const ProjectData = [
    {
      projectTitle: "Roomie Connect Website Design",
      ProjectDescription:
        " Welcome to RoomieConnect, the ultimate solution for finding the perfect roommate! This Figma design project aims to create a visually appealing and user-friendly website that seamlessly connects individuals searching for compatible roommates. With a focus on modern design principles and intuitive user experience, RoomieConnect aims to revolutionize the way people find and connect with their ideal roommates.",
      carts: [
        {
          title: "Sing In Page",
          imageSrc: "ProjectImg/roommate/loginPage.png",
        },
        {
          title: "Home Page",
          imageSrc: "ProjectImg/roommate/Homepage.png",
        },
        {
          title: "Post Section",
          imageSrc: "ProjectImg/roommate/postSection.png",
        },
        // ... Add other cart data as needed
      ],
    },
    {
      projectTitle: "Compony website design",
      ProjectDescription:
      "Welcome to the dynamic world of construction Company, where we blend craftsmanship with cutting-edge technology to redefine the digital presence of construction excellence. Our portfolio section showcases a meticulous web design project that brings the essence of our construction prowess to life.",
      carts: [
        {
          title: "Home Page",
          imageSrc: "ProjectImg/roommate/Home.png",
        },
        {
          title: "About Page",
          imageSrc: "ProjectImg/roommate/about.png",
        },
        {
          title: "Team member Page",
          imageSrc: "ProjectImg/roommate/team.png",
        },
        // ... Add other cart data as needed
      ],
    },
  ];

  return (
    <div className="justify-center items-stretch bg-white flex flex-row mt-5 mb-5">
      <div className="items-stretch flex w-full justify-between gap-0 pr-11 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="justify-center items-stretch bg-black flex basis-[0%] flex-col pl-9 pr-9 ssm:pl-2 sm:pl-4 sm:pr-4 ssm:pr-2 max-md:px-5">
          <div className="justify-center items-center flex flex-col px-5">
            <div className="justify-center flex shrink-0 flex-col">
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
              <div className="justify-center items-center bg-white self-center flex w-[9px] shrink-0 h-[150px] flex-col mt-12 max-md:mt-10 max-md:mx-2.5 xl:hidden lg:hidden" />
            </div>
          </div>
        </div>

        <div className="flex grow basis-[0%] flex-col py-5 items-start max-md:max-w-full">
          <div className="items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-between items-center flex gap-[1px]">
              <div className="justify-center items-center bg-stone-500 flex ssm:w-[20px] sm:w-[20px] w-[61px] shrink-0 h-[15px] flex-col my-auto" />
              <div className="text-black text-center text-2xl ssm:text-base sm:text-base font-semibold whitespace-nowrap justify-center items-stretch bg-white yellow-400 ring-2 ring-yellow-400 ring-inset self-stretch grow px-2.5 ssm:px-1.5 sm:px-1.6 py-4 ssm:py-2 sm:py-2 rounded-xl">
                {" "}
                Project's
              </div>
              <div className="text-white bg-black text-center text-2xl ssm:text-base sm:text-base font-semibold whitespace-nowrap justify-center items-stretch ring-2 ring-gray-500 ring-inset  grow px-5 py-4 ssm:py-2 sm:py-2 ssm:px-1.5 sm:px1.6 rounded-xl">
                0 Kilometer left
              </div>
            </div>
          </div>{" "}
          {ProjectData.map((project, index) => (
            <div
              key={index}
              className="justify-center self-stretch flex flex-col  mt-10 px-4 items-start max-md:max-w-full max-md:mt-10 sm:items-start sm:justify-between"
            >
              <div className="justify-center items-center  mb-4 sm:mb-0 flex gap-0">
                <div className="justify-center w-9 h-2 items-center bg-stone-500 flex shrink-0  flex-col my-auto" />{" "}
                <div className="text-black text-center text-base font-semibold whitespace-nowrap justify-center items-stretch ring-2 ring-yellow-400 ring-inset py-2 px-4 rounded-2xl">
                  {" "}
                  {project.projectTitle}
                </div>
              </div>
              <div className="flex flex-col shadow-xl ">
                <div className="flex-row  gap-3 grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {project.carts.map((cart, CartIndex) => (
                    <Cart
                      key={CartIndex}
                      title={cart.title}
                      imageSrc={cart.imageSrc}
                      onOpen={() => openImage(cart.imageSrc)}
                    />
                  ))}
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto">
                  <h4 className="text-lg font-semibold mb-4">
                    Project Description
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {project.ProjectDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {openedImage && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative">
                <img
                  src={openedImage}
                  alt="Opened"
                  className="max-h-full max-w-full"
                />
                <button
                  className="absolute top-10 right-4 p-2 outline outline-offset-0 bg-yellow-50 text-black outline-yellow-400 w-[6rem] py-1 rounded-sm"
                  onClick={closeImage}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesignProject;
