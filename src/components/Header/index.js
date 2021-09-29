import React from 'react';
import { Popover } from '@headlessui/react';
import logo from 'assets/images/dripbox.png';
import { Image } from 'atoms/Image/Image';

export default function Header() {
  return (
    <>
      <Popover className=" bg-white border-b-2 border-gray-100 w-screen py-2 fixed z-50">
        {({ open }) => (
          <>
            <div className="mx-auto px-10 py-2 max-w-7xl">
              <div className="flex justify-between  w-full items-center">
                <div className="flex items-center">
                  <div className="flex">
                    <Image
                      src={logo}
                      alt="logo"
                      height="40"
                      width="40"
                      className="cursor-pointer"
                    />
                    <span className="m-auto ml-2 text-xl font-medium text-gray-600 cursor-pointer">
                      artcryption
                    </span>
                  </div>

                  <div className="flex space-x-6 pl-20 pt-1">
                    <div className=" px-2 text-base font-medium hover:text-primary">
                      How it works
                    </div>

                    <div className=" px-2 text-base font-medium hover:text-primary">Feed</div>
                    <div className=" px-2 text-base font-medium hover:text-primary">Curators</div>
                    <div className=" px-2 text-base font-medium hover:text-primary">Blog</div>
                  </div>
                </div>
                <div className="bg-black text-white rounded-full px-3 py-1">JOIN THE WAITLIST</div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}
