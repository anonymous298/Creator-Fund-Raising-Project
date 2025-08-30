// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-20 border-b-2 border-gray-800 flex gap-2 justify-center items-center flex-col gap-y-2 max-[400px]:p-15">
        <div className="heading flex justify-center items-center">
          <h3 className="text-white text-[45px] font-bold">Buy Me A Coffee</h3>
          <img src="/coffee.gif" alt="coffee" className="size-30"/>
        </div>

        <p className="text-gray-200 font-semibold max-[500px]:items-start">Where Followers Supports Their Creators</p>

        <div className="flex items-center justify-center gap-x-2 mt-4">
          <Link href={'/login'}>
            <button className='p-2 px-5 bg-purple-500 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-sm transition-all'>Get Started</button>
          </Link>

          <Link href={'/about'}>
            <button className='p-2 px-5 bg-purple-500 rounded-2xl text-white font-semibold hover:bg-purple-650 cursor-pointer shadow-purple-800 hover:shadow-sm transition-all'>Read More</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-15 pb-20">
        <h3 className="text-white font-bold text-[25px] text-center">Your Fans Can Support You Buying A Coffee</h3>

        <div className="flex justify-center items-center flex-wrap gap-x-15 mt-15 gap-y-10">
          <div className="flex flex-col justify-center items-center w-[200px] gap-y-2">
            <div className="rounded-full p-7 bg-gray-400 w-[120px] hover:shadow-2xl shadow-gray-500  hover:transform hover:-translate-y-px transition-all">
              <img src="/group.gif" alt="gif" className="size-15" />
            </div>
            <p className="text-white text-[15px] font-semibold">Fan wants to help you</p>
            <p className="text-white text-[12px] ">Your fans are available to help you</p>
          </div>

          <div className="flex flex-col justify-center items-center w-[200px] gap-y-2">
            <div className="rounded-full p-7 bg-gray-400 w-[120px]  hover:shadow-2xl shadow-gray-500  hover:transform hover:-translate-y-px transition-all">
              <img src="/coin.gif" alt="gif" className="size-15" />
            </div>
            <p className="text-white text-[15px] font-semibold">Fan wants to help you</p>
            <p className="text-white text-[12px] ">Your fans are available to help you</p>
          </div>

          <div className="flex flex-col justify-center items-center w-[200px] gap-y-2">
            <div className="rounded-full p-7 bg-gray-400 w-[120px]  hover:shadow-2xl shadow-gray-500 hover:transform hover:-translate-y-px transition-all">
              <img src="/man.gif" alt="gif" className="size-15" />
            </div>
            <p className="text-white text-[15px] font-semibold">Fan wants to help you</p>
            <p className="text-white text-[12px] ">Your fans are available to help you</p>
          </div>


        </div>
      </div>


    </div>
  );
}
