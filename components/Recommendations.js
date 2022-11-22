import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import Image from "next/image";
import {MdMarkEmailUnread} from "react-icons/md";
import {recommendedPosts} from "./index";

const Recommendations = ({post,author}) => {
    return (
        <div className='h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]'>
            <div className='flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full'>
                登录账户观看
            </div>
            <div className='flex items-center gap-[0.6rem] h-[2.6rem] border px-[1rem] rounded-full'>
                <AiOutlineSearch/>
                <input
                className='border-none outline-none bg-none w-full'
                placeholder='搜索'
                type='text'
                />
            </div>

            <div className='my-[2rem]'>
                <div className='h-[5rem] w-[5rem] rounded-full overflow-hidden'>
                    <Image
                        src={author?.data?.imageUer}
                        alt=''
                        width={100}
                        height={100}
                    />
                </div>
                <div className='mb-[.2rem] mt-4'>{author?.data?.name}</div>
                <div className='text-[#787878]'>{author?.data?.followerCount}粉丝</div>
                <div className='flex gap-[.6rem] my-4'>
                    <button className='bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-s'>订阅</button>
                    <button className='bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-s'><MdMarkEmailUnread/></button>
                </div>
            </div>
            <div>
                <div>更多内容</div>
                <div>
                    {recommendedPosts.map(post=>(
                    <div key='' className='flex items-center justify-between cursor-pointer my-2'>
                        <div className='flex-[4]'>
                            <div className='flex items-center gap-[.6rem]'>
                                <div className='rounded-full overflow-hidden w-[1.4rem] h-[1.4rem]'>
                                    <Image
                                        src={post.image}
                                        alt=''
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className='text-sm'>{post.author.name}</div>
                            </div>
                                <div className='font-bold'>{post.title}</div>
                        </div>

                        <div className='flex flex-1 items-center justify-center '>
                            <Image
                                src={post.author.image}
                                alt=''
                                width={150}
                                height={50}
                                className='object-cover'
                            />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recommendations;
