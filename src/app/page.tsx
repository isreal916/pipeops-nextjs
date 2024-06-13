"use client"
import Image from 'next/image'
 import Logo from './image-resize.png' 
 import aImage from './ai.png'
 import  { useEffect, useRef, useState } from "react";
 import { NeatConfig, NeatGradient } from "@firecms/neat";
 
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {

      if (!canvasRef.current)
          return;

      gradientRef.current = new NeatGradient({
          ref: canvasRef.current,
          "colors": [
            {
                "color": "#cdb4db",
                "enabled": true
            },
            {
                "color": "#ffc8dd",
                "enabled": true
            },
            {
                "color": "#ffafcc",
                "enabled": true
            },
            {
                "color": "#bde0fe",
                "enabled": true
            },
            {
                "color": "#a2d2ff",
                "enabled": false
            }
        ],
        "speed": 5,
        "horizontalPressure": 3,
        "verticalPressure": 3,
        "waveFrequencyX": 2,
        "waveFrequencyY": 4,
        "waveAmplitude": 5,
        "shadows": 0,
        "highlights": 2,
        "colorBrightness": 1,
        "colorSaturation": 3,
        "wireframe": false,
        "colorBlending": 5,
        "backgroundColor": "#003FFF",
        "backgroundAlpha": 1,
        "resolution": 1
    })

      return gradientRef.current.destroy;

  }, [canvasRef.current]);

 
  return (
    <>
  <header className=' flex bg-white text-warmBrown font-sans font-semibold w-full justify-around '>
    <div className='m-[10px] flex'>  <Image style={{
            borderRadius: '50%', 
          }} src={Logo} alt='logo' width={40} />  <p className='font-mono font-[20px]'>Medmind</p></div>
    <ul className='flex space-x-4 m-[10px]  ' >
   
    <li>About</li>
    <li>Features   </li>
    <li>Contact</li>
    </ul>
  </header>
  <div className='w-full flex'>
  <section className='w-[50%]'>
    <h1>Savor the flavor know the calories</h1>
  </section>
  <section className='w-[50%]'>
  {/* <canvas
            className='h-[200px]'
            style={{
                isolation: "isolate",
                height: "400px",
                width: "100%",
            }}
            ref={canvasRef}
        /> */}
         <Image style={{}} src={aImage} alt='logo'  />
  </section>
  </div>
 
  </>
  )

}
