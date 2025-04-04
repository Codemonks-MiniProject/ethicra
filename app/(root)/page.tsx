import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="container mx-auto px-10 flex items-center justify-between p-10 my-32">
        <div className="flex flex-col gap-6">
          <h1 className="text-7xl font-bold text-black mb-4">Take Online Interview.</h1>
          <p className="text-gray-950 text-2xl mb-2">NUMBER OF ACTIVE USERS RIGHT NOW</p>
          <p className="text-4xl text-blue-600 font-semibold mx-48">200+</p>
        </div>
        <div>
          <Image
            src="/images/landerpage.jpg"
            alt="Makla Image Download Maadi"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="bg-[#5127e8] py-24 px-16 h-[600px] overflow-visible">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 w-10/12 mx-auto">
          {/* Card 1: Online Assessment (Bottom) */}
          <div className="text-center text-white p-6 bg-[#a1d4a3] w-full md:w-[300px] h-[350px] flex flex-col justify-center items-center mt-52 shadow-md transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-lg">
            <div className="w-[160px] h-[160px] rounded-full bg-white mb-4 flex items-center justify-center">
              <Image src="/images/assessment.png" alt="Assessment Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Online Assessment</h2>
            <p className="text-lg">Assess candidates efficiently.</p>
          </div>

          {/* Card 2: Online Interview (Middle) */}
          <div className="text-center text-white p-6 bg-[#252426] w-full md:w-[300px] h-[350px] flex flex-col justify-center items-center md:translate-y-[-40px] mt-36 shadow-md transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-lg">
            <div className="w-[160px] h-[160px] rounded-full bg-white mb-4 flex items-center justify-center ">
              <Image src="/images/interview.png" alt="Interview Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Online Interview</h2>
            <p className="text-lg">Conduct interviews remotely.</p>
          </div>

          {/* Card 3: Report (Top) */}
          <div className="text-center text-white p-6 bg-[#d89fe0] w-full md:w-[300px] h-[350px] flex flex-col justify-center items-center md:translate-y-[-48px] mt-1 shadow-md transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-lg">
            <div className="w-[160px] h-[160px] rounded-full bg-white mb-4 flex items-center justify-center">
              <Image src="/images/report.png" alt="Report Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Report</h2>
            <p className="text-lg">Generate detailed reports.</p>
          </div>
        </div>
      </div>

      <div className="w-10/12 h-[1176px] mx-auto my-28 px-11 relative">
        <div className="flex flex-row justify-between items-center mb-10">
          <p className="text-3xl font-semibold">Explore Jobs</p>
          <Link href={'/login'} className="border border-gray-300 px-4 py-2 text-[#4724c7]">
            EXPLORE ALL
          </Link>
        </div>

        <div className="w-[410px] h-[305.89px] bg-[#FFF2E6] p-6 mb-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="w-[73px] h-[77px] rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Remote Jobs</h3>
          <p>Work from anywhere with flexible job opportunities across various industries.</p>
        </div>

        <div className="w-[360px] h-[305.89px] bg-[#FFF2E6] p-6 mb-4 shadow-sm absolute left-[480px] top-[150px] transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="w-[73px] h-[77px] rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Banking & Finance</h3>
          <p>Explore roles in investment, fintech, and financial management.</p>
        </div>

        <div className="w-[260px] h-[305.89px] bg-white p-6 mb-4 shadow-sm absolute left-[190px] top-[420px] transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="w-[73px] h-[77px] rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Internship</h3>
          <p>Gain hands-on experience and kickstart your career with exciting opportunities.</p>
        </div>

        <div className="w-[260px] h-[285.36px] bg-[#FFF2E6] p-6 mb-4 shadow-sm absolute left-[480px] top-[480px] transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="w-[73px] h-[77px] rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Analytics</h3>
          <p>Uncover insights and drive data-informed decisions with cutting-edge analytical roles.</p>
        </div>

        <div className="w-[360px] h-[305.89px] bg-white p-6 shadow-sm absolute left-[770px] top-[480px] transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="w-[73px] h-[77px] rounded-full bg-gray-300 mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Marketing</h3>
          <p>Create impactful campaigns and drive brand growth with innovative marketing strategies.</p>
        </div>
      </div>
    </div>
  );
};

export default Page;