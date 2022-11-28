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
        // 长度等于0则返回
        if (posts.length===0 || users.length===0){
            return
        }
        // 测试id是否和路由种的一样
        setPost(posts.find(post=>post.id===router.query.slug))
        setAuthor(users.find(user=>user.id===post.data?.author))
    },[post, posts, router.query.slug, users])
    return (
        <div className='flex'>
            {/*左边栏*/}
            <ReadersNav  author={author}/>
            {/*中间内容*/}
            <ArticleMain post={post} author={author}/>
            {/*右边栏*/}
            <Recommendations post={post} author={author}/>
        </div>
    );
};
export default Post;