import type { NextPage } from 'next'
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Story from './Story';
import { useSession } from 'next-auth/react';

interface ISuggestionsObj {
        id: number;
        name: string;
        username: string;
        avatar: string;
}
type ISuggestions = ISuggestionsObj[]

const Stories: NextPage = () => {
    const { data: session }: any = useSession();
    const [suggestions, setSuggestions] = useState<ISuggestions>([{
        id: 0,
        name: "",
        username: "",
        avatar: "",
    }])
    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            id: i,
            name: faker.helpers.contextualCard().name,
            username: faker.helpers.contextualCard().username,
            avatar: faker.helpers.contextualCard().avatar,
        }))
        setSuggestions(suggestions)
        console.log({suggestions})
    }, [])
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story img={session?.user?.image} userName={session?.user?.username}/>
            )}

            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} userName={profile.username}/>
            ))}
        </div>
    )
}

export default Stories
