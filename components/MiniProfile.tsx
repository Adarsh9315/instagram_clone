import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react';
import Posts from './Posts'
import Stories from './Stories'

const MiniProfile: NextPage = () => {
    const { data: session }: any = useSession();
    return (
        <div className='flex items-center justify-between mt-14 ml-10'>
            <img src={session?.user?.image} alt="" className='w-16 h-16 rounded-full border p-[2px]'/>
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>{session?.user?.username}</h2>
                <h3 className='text-sm text-gray-400'>Welcome</h3>
            </div>

            <button className='text-blue-400 text-sm font-semibold' onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default MiniProfile
