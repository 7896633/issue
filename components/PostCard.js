import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {FiBookmark} from "react-icons/fi";
import Link from "next/link";
import {db} from "../firebase";
import {doc,getDoc} from 'firebase/firestore'

const PostCard = ({post,author}) => {
    const [authorData,setAuthorData]=useState(null)
    // 取服务器中文档内容
    useEffect(()=>{
        const getAuthorData=async ()=>{
            setAuthorData(
                (await getDoc(doc(db, 'users', post.data.author))).data()
            )
        }
        getAuthorData()
    },[post])
    return (

        <div className='flex items-center max-w-[46rem] gap-[1rem] cursor-pointer'>
            <div className='flex flex-[2.5] flex-col'>
                <div className='flex gap-[.4rem]'>
                    <div className='grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]'>
                        {
                            authorData?.imageUer&&
                            <Image
                                src={authorData?.imageUer}
                                alt=''
                                width={40}
                                height={40}
                                className='object-cover'
                            />
                        }
                    </div>
                    <div className='font-medium'>{post.data.author}</div>
                </div>
                {/*点击进入对应选项id页*/}
                <Link href={`/post/${post.id}`}>
                    <h1 className='font-bold text-2xl'>{post.data.brief}</h1>
                </Link>

                <div className='text-[#787878]'>{post.data.title}</div>

                <div className=' flex items-center justify-between text-[#787878]'>
                <span className='space-x-2 '>
                    <span className='my-2 text-[.8rem]'>{new Date(post.data.postedOn).toLocaleDateString('zh-CN',{
                        day:'numeric',
                        month:'short'
                    })}</span>
                    <span className='my-2 text-[.8rem]'>{post.data.postLength}阅读</span>
                    <span className='bg-[#F2F3F2] p-1 rounded-full'>{post.data.category}</span>
                </span>
                    <span className='cursor-pointer'><FiBookmark className='h-5 w-5'/></span>
                </div>
            </div>
            <Link href={`/post/${post.id}`}>
                <div className='flex-1'>
                    {
                        post.data.bannerImage&&
                        <Image
                            src={post.data.bannerImage}
                            alt=''
                            height={100}
                            width={100}
                            className='w-auto h-auto'
                        />
                    }
                </div>
            </Link>
        </div>

    );
};

export default PostCard;