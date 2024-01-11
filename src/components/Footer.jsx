import React from 'react';
import { LightBulbIcon, CogIcon, HomeIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-white flex items-center justify-between p-4">
      <div className="flex items-center space-x-4 flex-grow justify-center">
        <LightBulbIcon className="text-gray-500 w-6 h-6" />
        <CogIcon className="text-gray-500 w-6 h-6" />
        <HomeIcon className="text-gray-500 w-6 h-6" />
      </div>

      <div className="w-375 h-67"></div>
    </footer>
  );
};

export default Footer;
