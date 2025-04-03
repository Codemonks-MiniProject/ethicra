import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <div className="container mx-auto px-10 flex items-center justify-between p-10 my-14">
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

      <div className="bg-[#5127e8] py-24 px-16 h-[675px] overflow-visible"> {/* Fixed height, overflow */}
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 w-10/12 mx-auto">
          {/* Card 1: Online Assessment (Bottom) */}
          <div className="text-center text-white p-6 rounded-lg bg-[#a1d4a3] w-full md:w-[370px] h-[416px] flex flex-col justify-center items-center mt-72"> {/* Adjusted card size */}
            <div className="w-24 h-24 rounded-full bg-white mb-4 flex items-center justify-center">
              <Image src="/images/assessment.png" alt="Assessment Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Online Assessment</h2>
            <p className="text-lg">Assess candidates efficiently.</p>
          </div>

          {/* Card 2: Online Interview (Middle) */}
          <div className="text-center text-white p-6 rounded-lg bg-[#252426] w-full md:w-[370px] h-[416px] flex flex-col justify-center items-center md:translate-y-[-24px]"> {/* Adjusted card size */}
            <div className="w-24 h-24 rounded-full bg-white mb-4 flex items-center justify-center">
              <Image src="/images/interview.png" alt="Interview Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Online Interview</h2>
            <p className="text-lg">Conduct interviews remotely.</p>
          </div>

          {/* Card 3: Report (Top) */}
          <div className="text-center text-white p-6 rounded-lg bg-[#d89fe0] w-full md:w-[370px] h-[416px] flex flex-col justify-center items-center md:translate-y-[-48px]"> {/* Adjusted card size */}
            <div className="w-24 h-24 rounded-full bg-white mb-4 flex items-center justify-center">
              <Image src="/images/report.png" alt="Report Icon" width={60} height={60} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Report</h2>
            <p className="text-lg">Generate detailed reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;