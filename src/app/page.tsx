'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/register');
  };
  return (
    <main>
      <div className=" min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="relative flex-1 pr-8 min-h-screen flex justify-end items-center">
          <div className="absolute top-0 left-0 ml-20 mt-4 w-[100px] h-[50px]">
            <img src="logo_brand_deep_purple.png" />
          </div>
          <div className="p-8 h-[550px] w-[550px]">
            <img src="/hero_bot_1.png"></img>
          </div>
        </div>
        <div className="flex-1 transform -translate-y-2">
          <div className="mb-2">
            <div className="py-0.5 w-12 text-center text-xs text-white rounded-lg px-2">
              beta
            </div>
          </div>
          {/** todo: add breakpoint at 1060 to flex-col */}
          <div className="flex flex-col items-center justify-center w-4/5">
            <div className="headline font-quicksand text-left text-[32px] font-bold pl-4">
              <div className="text-center">
                The easy and effective way to prepare for interviews
              </div>
              {/* <div className="pl-12"></div> */}
            </div>
            <div className="mt-6">
              <button
                className="relative text-sm text-white font-quicksand font-regular"
                onClick={handleGetStarted}
              >
                <div className="absolute inset-x-0 h-full -bottom-1 bg-[#331B5E] rounded-2xl"></div>

                <div className="relative bg-[#6C48BC] border border-[#6C48BC] rounded-2xl py-2 px-20 transition transform duration-200 active:translate-y-1">
                  GET STARTED
                </div>
              </button>
            </div>
            <div className="mt-6">
              <button className="relative text-sm font-quicksand">
                <div className="absolute inset-x-0 h-full -bottom-1 bg-slate-200 rounded-2xl"></div>

                <div className="relative bg-white border-2 border-gray-100 rounded-2xl py-2 px-6 text-primaryPurple transition transform duration-200 active:translate-y-1">
                  I ALREADY HAVE AN ACCOUNT
                </div>
              </button>
            </div>
          </div>
          {/* <div className="pl-32 flex flex-row items-center mt-8 gap-4">
            <div className=" w-[300px] border border-slate-200 rounded-lg">
              <input
                placeholder="Join the waitlist"
                className="rounded-lg w-full placeholder:px-2"
              />
            </div>
            <div>
              <button className="px-4 py-1 bg-slate-900 text-white rounded-lg ">
                Join Now
              </button>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className=" min-h-screen flex flex-row items-center justify-center"></div> */}
    </main>
  );
}

// All your interviews
// in one place
// Anxious about your dream job interview? Your AI-companion, has you covered! Practice. Get feedback. Take control. Get hired.
