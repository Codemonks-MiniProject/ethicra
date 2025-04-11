import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 flex flex-col items-center font-sans mb-10">
      <div className="w-full max-w-7xl flex justify-between mb-8">
        <div className="flex justify-between w-3/5">
          <div>
            <strong className="block">Mobile app</strong>
            <p className="text-sm text-gray-600">Features</p>
            <p className="text-sm text-gray-600">Live share</p>
            <p className="text-sm text-gray-600">Video record</p>
          </div>
          <div>
            <strong className="block">Community</strong>
            <p className="text-sm text-gray-600">Featured artists</p>
            <p className="text-sm text-gray-600">The Portal</p>
            <p className="text-sm text-gray-600">Live events</p>
          </div>
          <div>
            <strong className="block">Company</strong>
            <p className="text-sm text-gray-600">About us</p>
            <p className="text-sm text-gray-600">Contact us</p>
            <p className="text-sm text-gray-600">History</p>
          </div>
        </div>
        <div className="flex flex-col items-end w-2/5">
          <Link href="/sign-up" className="bg-[#4A3AFF] text-white py-2 px-5 rounded mb-2 w-[130px] h-[40px] flex items-center justify-center">Register</Link>
          <Link href="/login" className="border border-[#4A3AFF] text-[#4A3AFF] py-2 px-5 rounded mb-2 w-[130px] h-[40px] flex items-center justify-center">Log in</Link>
          <Link href="/admin" className="border border-[#4A3AFF] text-[#4A3AFF] py-2 px-5 rounded w-[130px] h-[40px] flex items-center justify-center">ADMIN</Link>
        </div>
      </div>
      <hr className="w-full border-t border-gray-200 mb-4" />
      <div className="w-full max-w-7xl flex justify-between items-center text-sm text-gray-600">
        <div>
          <span>© Hemanth, Inc. 2025. We love our users!</span>
        </div>
        <div className="flex items-center">
          <span>Follow us</span>
          <div className="flex ml-3">
            <div className="bg-[#E8C5B0] rounded-full w-10 h-10 flex justify-center items-center mr-2">
              <Image src="/images/facebook.png" alt="Facebook" width={12} height={12} />
            </div>
            <div className="bg-[#E8C5B0] rounded-full w-10 h-10 flex justify-center items-center mr-2">
              <Image src="/images/twitter.png" alt="Twitter" width={16} height={16} />
            </div>
            <div className="bg-[#E8C5B0] rounded-full w-10 h-10 flex justify-center items-center">
              <Image src="/images/instagram.png" alt="Instagram" width={18} height={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;