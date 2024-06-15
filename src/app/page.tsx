"use client";

import Image from "next/image";
import Logo from "./image-resize.png";
import aImage from "./imagein.jpeg";
import { Icon } from "./_component/icon";
import { Feature } from "./_component/feature";
import { data } from "./data/data";

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
      <div className="w-full flex h-[600px] ">
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
        <video  autoPlay>
      <source src="/ai-video.mp4" type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
          {/* <Image src={aImage} alt="logo" /> */}
        </section>
      </div>
      <div className="flex justify-center bg-white flex-col space-y-10 h-[600px]">
        
        <h4 className=" mt-[80px] max-w-[36rem] text-3xl font-bold  text-slate-900 self-center font-poppins ">
          Main Feature
        </h4>
        
        <p className="self-center font-medium font-sans text-[#606060] w-[50rem]">
          By targeting the hospitality industry MedMind can help establishments
          elevate their service,build brand loyalty,and attract health-conscious
          customers who appreciate personalized attention to their nutritional
          needs.
        </p>
        <div className="feature">
          <section className=" flex flex-row w-[900px] h-[452px] space-x-2 space y-2 m-auto">
            {data.map((data) => {
              // console.log(data.title)
              return (
                <Feature key={data.title} title={data.title} icon={data.icon} desc={data.desc} />
              );
            })}
          </section>
        </div>
      </div>
      <div className="flex h-[500px]" style={{border:'2px solid blue'}}>
      <h4 className="  max-w-[36rem] text-3xl font-bold  text-slate-900 m-auto mt-5 font-poppins ">
          Benefit
        </h4>

      </div>
    </>
  );
}
