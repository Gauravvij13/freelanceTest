import React from 'react';

import { DownloadIcon } from '@heroicons/react/outline';
import { PrinterIcon } from '@heroicons/react/outline';

export default function ShareSection() {
  return (
    <div className="flex mt-5 items-center text-gray-500 font-medium  absolute right-0">
      <div className="text-sm">Share</div>
      <DownloadIcon className=" ml-5 h-4 w-4 cursor-pointer " />
      <PrinterIcon className=" ml-5 h-4 w-4 cursor-pointer " />
    </div>
  );
}
