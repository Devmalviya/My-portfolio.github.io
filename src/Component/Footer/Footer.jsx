import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src={'https://img.freepik.com/premium-vector/dm-modern-minimal-initial-lettering-monogram-logo-md-modern-minimal-initial-lettering-monogram-logo_745848-163.jpg'}
                className="ml-2 h-[4rem]"
                alt="Logo"
              />
            </Link>
              <h2 className="font-bold text-gray-900 text-md">dev.malviya</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 hover:underline hover:text-gray-900">
                  <a
                    href="https://github.com/Devmalviya"
                   
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className="mb-4 hover:underline hover:text-gray-900">
                  <a
                     href="https://www.linkedin.com/in/dev-malviya/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedIn
                  </a>
                </li>
      
              </ul>
            </div>
           
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 text-center">
            © 2024
            <a href="#" className="hover:underline">
              . Dev.malviya
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
