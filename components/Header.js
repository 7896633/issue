import React, {useContext, useEffect, useState} from 'react';
import {MediumContext} from "../context/MediumContext";
import Modal from 'react-modal'
import {useRouter} from "next/router";
import Link from "next/link";
import PostModal from "./PostModal";

Modal.setAppElement('#__next')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        backgroundColor:'#fff',
        padding:0,
        border:'none',
    },
    overlay:{
        backgroundColor: 'rgba(10,11,13,0.75)',
    }
};


const Header = () => {
    const [color, setColor] = useState(false);

    useEffect(() => {
        const changeColor=()=>{
            if (window.scrollY>=300){
                setColor(true);
            }else {
                setColor(false);
            }
        }
        window.addEventListener('scroll',changeColor)
    }, []);
    const router=useRouter()
    const {currentUser,handleUserAuth}=useContext(MediumContext)
    return (
        <div className={`${color ? 'fixed top-0 right-0 left-0  shadow-xl bg-white':'bg-blue-300/90 '} flex justify-center gap-10 p-5  ` }>
            <div className='max-w-7xl flex-1 flex justify-between gap-10'>
                <div className='flex items-center'>
                    <h1 className='text-3xl cursor-pointer object-center'>LOGO</h1>
                </div>
                {currentUser ?
                    (
                        <div className='flex cursor-pointer items-center space-x-5'>
                            <div>主页</div>
                            <div>会员</div>
                            <Link href={'/?addNew=1'}>
                                <div className='bg-black text-white py-2 px-4 rounded-full'>写文章</div>
                            </Link>
                            <div className='bg-black text-white py-2 px-4 rounded-full'>获取会员</div>
                        </div>
                    ):(
                        <div className='flex cursor-pointer items-center space-x-5'>
                            <div>主页</div>
                            <div>会员</div>
                            <div onClick={handleUserAuth}>登录</div>
                            <div className='bg-black text-white py-2 px-4 rounded-full'>开始</div>
                        </div>
                    )
                }
            </div>
            <Modal
                isOpen={Boolean(router.query.addNew)}
                onRequestClose={()=>router.push('/')}
                style={customStyles}
            >
                <PostModal/>
            </Modal>
        </div>
    );
};

export default Header;