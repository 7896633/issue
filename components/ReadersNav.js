import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {HiOutlineHome} from "react-icons/hi";
import {FiBell} from "react-icons/fi";
import {BiBookmarks} from "react-icons/bi";
import {RiArticleLine} from "react-icons/ri";
import {BsPencilSquare} from "react-icons/bs";


const ReadersNav = ({author}) => {
    return (
        <div className='w-[5rem] h-screen flex flex-col justify-between items-center p-4'>
            <Link href='/'>
                <div className='text-2xl cursor-pointer object-center'>LOGO</div>
            </Link>
            <div className='flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]'>
                <HiOutlineHome/>
                <FiBell/>
                <BiBookmarks/>
                <RiArticleLine/>
                <div className='border-r'>
                    <BsPencilSquare/>
                </div>
            </div>
            <div className='w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center'>
                <Image
                    src={author?.data?.imageUer}
                    alt=''
                    width={50}
                    height={50}
                />
            </div>
        </div>
    );
};

export default ReadersNav;