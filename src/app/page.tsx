"use client";


import Image from "next/image";
import Logo from "./image-resize.png";
import aImage from "./imagein.jpeg";
import { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: "#cdb4db",
          enabled: true,
        },
        {
          color: "#ffc8dd",
          enabled: true,
        },
        {
          color: "#ffafcc",
          enabled: true,
        },
        {
          color: "#bde0fe",
          enabled: true,
        },
        {
          color: "#a2d2ff",
          enabled: false,
        },
      ],
      speed: 5,
      horizontalPressure: 3,
      verticalPressure: 3,
      waveFrequencyX: 2,
      waveFrequencyY: 4,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 3,
      wireframe: false,
      colorBlending: 5,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    return gradientRef.current.destroy;
  }, [canvasRef.current]);

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
          <li>Contact</li>
        </ul>
      </header>
      <div className="w-full flex ">
        <section className="w-[50%] flex flex-col justify-center ml-[40px] space-y-[15px]">
         
          <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]"> Savor the flavor know the calories</h1>
          <p className="text-[grey] text-[20px] font-sans ">
            Ai powered food image recognition
          </p>
          <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-[170px]" href="/components"><span>Try demo <span aria-hidden="true" className="hidden text-slate-400 sm:inline">→</span></span></a>
        </section>
        <section className="w-[50%]">
          {/* <canvas
            className='h-[200px]'
            style={{
                isolation: "isolate",
                height: "400px",
                width: "100%",
            }}
            ref={canvasRef}
        /> */}
          <Image style={{  }} src={aImage} alt="logo" />
        </section>
      </div>
      <div className="flex justify-center bg-white flex-col space-y-4">
      <h4 className=" mt-[80px] max-w-[36rem] text-3xl font-bold  text-slate-900 self-center font-poppins "> Main Feature</h4>
       <p className="self-center font-medium font-sans text-[#606060] w-[50rem]">By targeting the hospitality industry MedMind can help establishments elevate their service,build brand loyalty,and attract health-conscious customers who appreciate personalized attention to their nutritional needs.</p>

      </div><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>

    </>
  );
}
