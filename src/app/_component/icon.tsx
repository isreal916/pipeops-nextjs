import Image from 'next/image';

export const Icon =(Props = {src:'' ,alt :''})=>{
  let {src,alt} =Props
 
  return (
    
  <Image src={src} alt={alt} width={50} height={50} className='bg-[#EBEBEB] rounded-lg' />
  
  )
}