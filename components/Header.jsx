import React from 'react'
import SiteLogo from '../public/career.png'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    return (
        <div className='flex justify-between w-3/4 mx-auto pt-5'>
            <h1 className='text-[2rem] text-[#7A66FF] font-bold'><Link href="/">Hiring Only</Link></h1>
            {/* <Image
                src={SiteLogo}
                width={100}
                height={100}
                alt="Site Logo"
            /> */}
            
        </div>
    )
}

export default Header