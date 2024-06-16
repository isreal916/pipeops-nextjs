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
      <header className=" flex  text-warmBrown font-sans font-semibold w-full justify-between hidden">
        <div className="m-[10px] flex">
        
          <Image style={{}} src={Logo} alt="logo" width={50} className="" />
        </div>
        <ul className="flex space-x-4 self-center font-sans mr-[20px] ">
          <li>About</li>
          <li>Features </li>
          <li> Contact</li>
        </ul>
      </header>
     
      <div className="w-full flex flex-col sm:flex-row h-[600px] ">
        <section className="w-full sm:w-[50%] flex flex-col justify-center ml-[40px] space-y-[15px]">
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
           
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
        <section className="w-full sm:w-[50%]">
          <Image src={aImage} alt="logo" />
        </section>
      </div>
      <div className="flex justify-center bg-white flex-col space-y-10 h-auto sm:h-[600px] w-auto">
        <h4 className=" mt-[80px] max-w-[36rem] text-3xl font-bold  text-slate-900 self-center font-poppins ">
          Main Feature
        </h4>

        <p className="self-center font-medium font-sans text-[#606060] max-w-[50rem] text-[17px]">
          By targeting the hospitality industry MedMind can help establishments
          elevate their service,build brand loyalty,and attract health-conscious
          customers who appreciate personalized attention to their nutritional
          needs.
        </p>
        <div className="feature p-[22px]">
          <section className=" flex flex-col sm:flex-row w-[900px]   space-y-2 sm:space-x-2 space y-2 m-auto">
            {data.map((data) => {
              // console.log(data.title)
              return (
                <Feature
                  key={data.title}
                  title={data.title}
                  icon={data.icon}
                  desc={data.desc}
                />
              );
            })}
          </section>
        </div>
      </div>
      <div className="flex  h-[500px] flex-col space-y-6 p-[22px]">
        <h4 className="  max-w-[36rem] text-3xl font-bold  text-slate-900 m-auto mt-5 font-poppins ">
          Benefit
        </h4>
        <p className="self-center font-medium font-sans text-[#606060] max-w-[40rem]">
          Transform Your hospitality business with Medmind,Personalized
          Nutrition,Improved Efficiency,and Increased revenue
        </p>
        <section className="flex flex-col sm:flex-row space-y-6 sm:space-x-6 justify-center">
          <div className="bg-white w-[400px] rounded-lg p-[22px] space-y-4">
            <h1 className="font-bold">Personalized guest experience</h1>
            <p>
              Medmind's Ai-powered technology provides personalized nutrition
              insights and recommendations,enhancing the guest experience and
              fostering loyalty
            </p>
          </div>
          <div className="bg-white w-[400px] rounded-lg p-[22px] space-y-4">
            <h1 className="font-bold">Improved food safety </h1>
            <p>
              MedMind's accurate food recognition and allergen detection ensure
              a safer food environment for guests,reducing the risk of food
              related incident
            </p>
          </div>
          <div className="bg-white w-[400px] rounded-lg p-[22px] space-y-4">
            <h1 className="font-bold">Competitive advantage</h1>
            <p>
              By offering Medmind's innovative technology hotels and restaurant
              differntiate themselve from competitors,attracting hrealth
              conscious guests and enhancing thier brand reputation{" "}
            </p>
          </div>
        </section>
      </div>
      <div className="bg-white flex space-x-4 justify-center p-[22px] w-auto  hidden">
        <p className="font-extrabold text-[20px] ]">
          Get started with personalized nutrition and transform your hospitality
          business
        </p>
        <a
          className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-[170px]"
          href="/medmind"
        >
          <span>
            Get started
            <span
              aria-hidden="true"
              className="hidden text-slate-400 sm:inline"
            >
              →
            </span>
          </span>
        </a>
      </div>
    
    </>
  );
}
