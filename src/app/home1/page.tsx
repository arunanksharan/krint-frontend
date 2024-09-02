import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className=" min-h-screen flex flex-row items-center justify-center">
        <div className="flex-1">
          <div className="ml-32 ">
            <div className="bg-slate-400 py-0.5 w-12 text-center text-xs text-white rounded-lg px-2">
              beta
            </div>
          </div>
          <div className="headline text-left text-[64px] font-bold">
            <div className="pl-32">All your interviews</div>
            <div className="pl-32">in one place</div>
          </div>
          <div className="text-left mt-8 font-medium text-xl">
            <div className="pl-32">Anxious about your dream job interview?</div>
            <div className="mt-1 pl-32">
              Your AI-companion, has you covered!
            </div>
            {/* <div>Practice. Evaluate. Improve.</div> */}
          </div>
          <div className="pl-32 flex flex-row items-center mt-8 gap-4">
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
          </div>
        </div>
        <div className="flex-1 mr-4 min-h-screen flex items-center bg-blue-300">
          <div className="p-8">
            <img src="/hero_1.svg"></img>
          </div>
        </div>
      </div>
      {/* <div className=" min-h-screen flex flex-row items-center justify-center"></div> */}
    </main>
  );
}

// All your interviews
// in one place
// Anxious about your dream job interview? Your AI-companion, has you covered! Practice. Get feedback. Take control. Get hired.
