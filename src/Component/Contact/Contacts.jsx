import React from "react";

function Contacts() {
  return (
    <div>
      {/* Main Content */}
      <main className="p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to me through any of the following methods:
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p>
                <a
                  href="mailto:devmalviya977@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  devmalviya977@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Mobile</h3>
              <p>
                <a
                  href="tel:+9171108239"
                  className="text-blue-500 hover:underline"
                >
                  +91 9171108 237
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contacts;
