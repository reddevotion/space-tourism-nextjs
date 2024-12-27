import Image from 'next/image'
import { navLinks } from './constants/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const Sidebar = ({handleClose, className}: {handleClose: () => void, className: string}) => {
    
    const pathname = usePathname()
  return (
    <div className={`absolute md:hidden top-0 h-[100vh] flex flex-col gap-12 w-[254px] pl-8 bg-color-1/15 ease-in-out backdrop-blur-[80px] z-20 transition-all duration-700 ${className === '' ? '-right-full': className}`}>
        <div className='py-8 w-full flex items-center justify-end pr-6'>
            <button onClick={handleClose}>
                <Image src="/images/shared/icon-close.svg" alt="close" width={24} height={24} className='w-[24px] h-[24px]'/>
            </button>
        </div>
        <ul className='w-full flex flex-col gap-8'>
            {navLinks.map((item, index) => (
                <li className={`font-barlowcon uppercase text-color-3 tracking-[2px] relative ${item.link === pathname ? 'before:absolute before:block before:z-50 before:bg-color-3 before:bottom-0 before:right-0 before:h-full before:w-1' : ''}`} key={index}><Link href={item.link}><span className='font-bold tracking-[2.7px]'>{item.num} </span>{item.text}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar