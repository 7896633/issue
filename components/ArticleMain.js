import React from 'react';
import Image from "next/image";
import {AiFillPlayCircle, AiFillWechat} from "react-icons/ai";
import {SiTencentqq} from "react-icons/si";
import {FiMoreHorizontal} from "react-icons/fi";
import {BiBookmarks} from "react-icons/bi";
import {HiOutlineLink} from "react-icons/hi";

const ArticleMain = ({post,author}) => {
    return (
        <div className='flex items-center justify-center flex-[3] border-l border-r'>
            <div className='h-screen w-full p-8'>
                <div className='flex justify-between items-center mt-[2.2rem] mb-[1.2rem]'>
                    <div className='flex gap-4'>
                        <div className='h-[3rem] w-[3rem] grid  rounded-full overflow-hidden'>
                            <Image
                                src={author?.data?.imageUer}
                                alt=''
                                width={100}
                                height={100}
                                className='object-cover'
                            />
                        </div>
                        <div className='flex flex-1 flex-col justify-center'>
                            <div>{author?.data?.name}</div>
                            <div className='flex gap-1 text-[#787878]'>
                                <span className='my-2 text-[.8rem]'>
                                    {new Date(post.data?.postedOn).toLocaleDateString('zh-CN',{
                                        day:'numeric',
                                        month:'short',
                                })}</span>
                                <span className='my-2 text-[.8rem]'>{post.data?.postLength}阅读</span>
                                <span className='flex items-center gap-[.2rem] text-[#1A8917]'><AiFillPlayCircle/>听</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 text-[#787878] cursor-pointer'>
                        <SiTencentqq/>
                        <AiFillWechat/>
                        <HiOutlineLink/>
                        <BiBookmarks/>
                        <FiMoreHorizontal/>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-3xl'>{post?.data?.title}</h1>
                    <h4 className='text-lg text-[#292929]'>
                        <div className='flex items-center'>
                            作者：{author?.data?.name},
                            <div className='text-sm text-[#787878]'>{new Date(post.data?.postedOn).toLocaleDateString('zh-CN',{
                                day:'numeric',
                                month:'short',
                                year:'numeric'
                            })}</div>
                        </div>
                        <div>简介：{post?.data?.brief}</div>
                    </h4>
                    <div className='text-lg text-[#292929'>
                        {post?.data?.body}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleMain;