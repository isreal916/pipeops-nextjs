import Image from 'next/image'
 import Logo from './image-resize.png'
export default function Home() {
  return (
  <header className=' flex bg-white text-warmBrown font-sans font-semibold w-full justify-between '>
    <div className='rounded-full'> <Image style={{
            borderRadius: '50%', 
          }} src={Logo} alt='logo' width={40} /> </div>
    <ul className='flex space-x-4 m-[10px]  ' >
    <li className='text-blue'>Home</li>
    <li>About</li>
    <li>features   </li>
    <li>Contact</li>
    </ul>
  </header>
  )
}
