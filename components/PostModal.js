import React, {useContext, useState} from 'react';
import {MediumContext} from "../context/MediumContext";
import {collection,addDoc,serverTimestamp} from 'firebase/firestore'
import {db} from "../firebase";

const PostModal = () => {
    const {currentUser}=useContext(MediumContext)
    const [title,setTitle]=useState('')
    const [brief,setBrief]=useState('')
    const [category,setCategory]=useState('')
    const [postLength,setPostLength]=useState('')
    const [bannerImage,setBannerImage]=useState('')
    const [body,setBody]=useState('')

    const addPostToFirebase=async event=>{
        event.preventDefault()
        await addDoc(collection(db,'articles'),{
            bannerImage:bannerImage,
            body:body,
            category:category,
            brief:brief,
            postedOn:serverTimestamp(),
            postLength:Number(postLength),
            title:title,
            author:currentUser.email
        })
    }

    return (
        <div className='w-[45rem] h-full flex flex-col justify-start items-center
        gap-4 p-4 overflow-scroll
        '>
            <div className='my-2 font-bold text-3xl'>新文章发布</div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>标题</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <input
                        className='w-full text-sky-300 py-1 border-0 outline-none bg-transparent'
                        type='text'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </span>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>简介</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <input
                        className='w-full text-sky-300 py-1 border-0 outline-none bg-transparent'
                        type='text'
                        value={brief}
                        onChange={event => setBrief(event.target.value)}
                    />
                </span>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>图片来源</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <input
                        className='w-full text-sky-300 py-1 border-0 outline-none bg-transparent'
                        type='text'
                        value={bannerImage}
                        onChange={event => setBannerImage(event.target.value)}
                    />
                </span>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>文章类型</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <input
                        className='w-full text-sky-300 py-1 border-0 outline-none bg-transparent'
                        type='text'
                        value={category}
                        onChange={event => setCategory(event.target.value)}
                    />
                </span>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>发布时间</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <input
                        className='w-full text-sky-300 py-1 border-0 outline-none bg-transparent'
                        type='text'
                        value={postLength}
                        onChange={event => setPostLength(event.target.value)}
                    />
                </span>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <span className='flex-1 text-end'>内容</span>
                <span className='flex-[5] h-min border-2 border-[#787878]'>
                    <textarea
                        className='w-full text-sky-300 border-0 outline-none bg-transparent'
                        type='text'
                        rows={12}
                        value={body}
                        onChange={event => setBody(event.target.value)}
                    />
                </span>
            </div>
            <button onClick={addPostToFirebase} className='bg-black  text-white py-2 px-4 rounded-full'>提交</button>
        </div>
    );
};

export default PostModal;