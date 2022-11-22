import React, {useContext, useEffect, useState} from 'react';
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import ArticleMain from "../../components/ArticleMain";
import {MediumContext} from "../../context/MediumContext";
import {useRouter} from "next/router";

const Post = () => {
    const {posts,users}=useContext(MediumContext)
    const router=useRouter()
    const [post,setPost]=useState([])
    const [author,setAuthor]=useState([])
    useEffect(()=>{
        if (posts.length===0 || users.length===0){
            return
        }
        setPost(posts.find(post=>post.id===router.query.slug))
        setAuthor(users.find(user=>user.id===post.data?.author))
    },[post])
    return (
        <div className='flex'>
            <ReadersNav  author={author}/>
            <ArticleMain post={post} author={author}/>
            <Recommendations post={post} author={author}/>

        </div>
    );
};
export default Post;