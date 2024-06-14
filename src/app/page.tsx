"use client";

import Image from "next/image";
import Logo from "./image-resize.png";
import aImage from "./imagein.jpeg";
import { Icon } from "./_component/icon";

export default function Home() {
  return (
    <>
      <header
        className=" flex bg-white text-warmBrown font-sans font-semibold w-full justify-between
   "
      >
        <div className="m-[10px] flex">
          {" "}
          <Image style={{}} src={Logo} alt="logo" width={50} />{" "}
        </div>
        <ul className="flex space-x-4 self-center font-sans mr-[20px] ">
          <li>About</li>
          <li>Features </li>
          <li> Contact</li>
        </ul>
      </header>
      <div className="w-full flex ">
        <section className="w-[50%] flex flex-col justify-center ml-[40px] space-y-[15px]">
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
            {" "}
            Savor the flavor know the calories
          </h1>
          <p className="text-[grey] text-[20px] font-sans ">
            Ai powered food image recognition
          </p>
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-[170px]"
            href="/components"
          >
            <span>
              Try demo{" "}
              <span
                aria-hidden="true"
                className="hidden text-slate-400 sm:inline"
              >
                →
              </span>
            </span>
          </a>
        </section>
        <section className="w-[50%]">
          <Image src={aImage} alt="logo" />
        </section>
      </div>
      <div className="flex justify-center bg-white flex-col space-y-4">
        <h4 className=" mt-[80px] max-w-[36rem] text-3xl font-bold  text-slate-900 self-center font-poppins ">
          {" "}
          Main Feature
        </h4>
        <p className="self-center font-medium font-sans text-[#606060] w-[50rem]">
          By targeting the hospitality industry MedMind can help establishments
          elevate their service,build brand loyalty,and attract health-conscious
          customers who appreciate personalized attention to their nutritional
          needs.
        </p>
        <div className="feature">
          <section className=" flex flex-wrap w-[600px] h-[452px] space-x-2 space y-2 m-[14px]" >
         
          </section>
          <section></section>
        </div>
      </div>
    </>
  );
}
