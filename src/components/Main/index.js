import React from 'react';
import logo from 'assets/images/dripbox.png';
import artcryptionlogo from 'assets/images/artcryptionlogo.png';
import BoxyLogo from 'assets/images/boxy.png';
import RectangleImage from '../../assets/images/Rectangle.svg';
import QRImage from '../../assets/images/qr.png';
import artcryptionlogo1GREYlayers from '../../assets/images/artcryptionlogo1GREYlayers.png';
import { Image } from 'atoms/Image/Image';
import ShareSection from 'components/ShareSection';

export default function Main() {
  return (
    <div className="mx-auto px-10 py-28  max-w-7xl">
      <div className="flex items-center">
        <Image src={BoxyLogo} alt="logo" height="80" width="80" className="cursor-pointer" />
        <div className="ml-10 text-5xl font-medium">Certificate of Ownership</div>
      </div>
      <div className="grid grid-cols-6 gap-24">
        <div className="relative col-span-4 ">
          <div className="shadow-corner rounded-md mt-10 p-5 relative">
            <div className="flex">
              <Image src={logo} alt="logo" height="40" width="40" className="cursor-pointer" />
              <span className="m-auto ml-5 text-3xl font-medium  cursor-pointer">artcryption</span>
            </div>
            <div className="absolute right-10 top-10">
              <Image
                src={artcryptionlogo}
                alt="logo"
                height="80"
                width="80"
                className="cursor-pointer"
              />
            </div>{' '}
            <div className="mt-10 text-2xl text-left ml-5 font-medium">
              Certificate of Ownership
            </div>
            <div className=" ml-10">
              <div className="bg-gray-200 text-left mt-8 w-10/12 d-shape pl-10 pr-10 py-5 flex justify-between">
                <ul className="text-gray-500  text-sm space-y-1">
                  <li>Title</li>
                  <li>Creator(s)</li>
                  <li>Copyright Owner(s)</li>
                  <li>Category</li>
                  <li>Creation Date</li>
                  <li>Current Owner</li>
                  <li>Files Url</li>
                  <li>Trading History </li>
                </ul>
                <ul className="font-medium text-sm space-y-1 ml-5">
                  <li>Title</li>
                  <li>category</li>
                  <li>publication</li>
                  <li>add hash</li>
                  <li>add hash</li>
                  <li>add hash</li>
                  <li>add hash connexted to IPFS</li>
                  <li>add hash URL</li>
                </ul>
              </div>
              <div className="bg-gray-100 px-10 relative  pt-10 pb-28 ">
                <div className="grid grid-cols-6 gap-5 ">
                  <div className="col-span-4">
                    <Image src={RectangleImage} className="cursor-pointer" />
                  </div>
                  <div className="text-gray-400 text-left col-span-2 mx-auto">
                    <div className="text-base font-medium">Creator Name(s)</div>

                    <ul className="text-base mt-5">
                      <li>title</li>
                      <li>medium</li>
                      <li>dimension</li>
                      <li>limited edition</li>
                      <li>price</li>
                    </ul>
                  </div>
                </div>
                <div className=" absolute right-4 bottom-5 ">
                  <Image
                    src={QRImage}
                    alt="logo"
                    height="60"
                    width="60"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="text-gray-400 text-base font-medium my-10">
                smart contract token address | timestamp | hash url
              </div>
              <div className="text-gray-600 pr-10 w-full text-sm font-bold text-right">
                VERIFIED BY ARTCRYPTION
              </div>
            </div>
          </div>
          <ShareSection />
        </div>
        <div className="col-span-2 relative px-8">
          <div className="relative">
            <div className="w-24 h-24">
              <Image src={artcryptionlogo1GREYlayers} alt="logo" className="cursor-pointer" />
            </div>
            <div className="rounded-md shadow-corner px-6 py-10 mt-5">
              <div className="text-xl font-medium text-gray-600">Limited Editions</div>
              <div className="text-sm mt-2 font-medium text-gray-500">100 Limited Editions</div>
              <div className="text-sm mt-5 text-gray-400">
                Click on the button below to download a CSV fileof all the limited edition
                Certificate numbers
              </div>
            </div>
            <ShareSection />
          </div>
        </div>
      </div>
    </div>
  );
}
