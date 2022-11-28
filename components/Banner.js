import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <div className='h-max-[10rem] flex items-center justify-center bg-blue-300/90 border-y border-black'>
            <div className='max-w-7xl flex-1 flex items-center justify-between '>
                <div className='space-y-5 p-10 flex-[3]'>
                    <h1 className='max-w-xl text-[5rem] font-medium'>
                        阅读探索
                    </h1>
                    <h3 className='text-lg'>发现作家关于任何主题的故事、<br/>思想和专业知识。</h3>
                    <button className='bg-black text-white py-2 px-4 rounded-full'>开始阅读</button>
                </div>
                <Image src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2108ce-e04b-47c0-845f-b5d35763a936/dafn57j-1c75576f-19c0-4c2b-be04-08e1025843b3.png/v1/fill/w_1024,h_552,strp/book_png__4_by_bettadenu_dafn57j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTUyIiwicGF0aCI6IlwvZlwvOWMyMTA4Y2UtZTA0Yi00N2MwLTg0NWYtYjVkMzU3NjNhOTM2XC9kYWZuNTdqLTFjNzU1NzZmLTE5YzAtNGMyYi1iZTA0LTA4ZTEwMjU4NDNiMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.74dinV92U7SfW5OP5-VDEx0LIfm3VqDLARSOSOaYbyM'
                       alt=''
                       width={400}
                       height={400}
                       className='hidden h-[16.75rem] md:inline-flex object-contain flex-1 py-10'
                />
            </div>
        </div>
    );
};

export default Banner;