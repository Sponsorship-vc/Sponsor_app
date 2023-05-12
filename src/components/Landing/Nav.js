import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../../Assets/Landing/logo.png'
import {Link} from 'react-router-dom'
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="  h-16">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center ml-9">
              <div className="flex-shrink-0">
                <img src={logo} className="w-25% h-auto" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" text-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Discover
                  </a>
                  <Link to='/dashboard/innovator'> 
                  <a
                    href="#"
                    className="text-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Innovations
                  </a>
                  </Link> 
                  <Link to='/dashboard/sponsor'>
                  <a
                    href="#"
                    className="text-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sponsors
                  </a> 
                  </Link>

                  <a
                    href="#aboutus"
                    className="text-dark-blue hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About Us
                  </a>
                </div>
              </div>
              </div>

              <div className="hidden md:block">
              <div className="gap-x-2 flex">
                    <Link to='/login/role'>
                    <p
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 lg:mt-0 font-bold"
                    >
                      Sign In
                    </p></Link>
                    <Link to='/signup/role'>
                    <p
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white bg-gray-800 hover:bg-gray-900 lg:mt-0 font-bold"
                    >
                      Register
                    </p>
                    </Link>
                </div>
              </div>
            
            <div className="-mr-2 gap-x-4 flex md:hidden">
            <div className="flex gap-x-2 my-auto">
                    <Link to='/login/role'>
                    <p
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-gray-800 lg:mt-0 font-bold"
                    >
                      Sign In
                    </p></Link>
                </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-dark-blue block px-3 py-2 rounded-md text-base font-medium"
                >
                  Disover
                </a>

                <a
                  href="#"
                  className="text-dark-blue block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Innovations
                </a>

                <a
                  href="#"
                  className="text-dark-blue  block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Sponsors
                </a>

                <a
                  href="#aboutus"
                  className="text-dark-blue  block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  About us
                </a>
                    {/* <Link to='/login/role'>
                    <p
                      className="text-dark-blue  block px-3 py-2 rounded-md text-base font-medium text-gray-800 border-gray-800 font-bold hover:bg-gray-700"
                    >
                      Sign In
                    </p></Link> */}
                    <Link to='/signup/role'>
                    <p
                      className="text-dark-blue  block px-3 py-2 my-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-900 font-bold"
                    >
                      Register
                    </p>
                    </Link>
              </div>
              
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;