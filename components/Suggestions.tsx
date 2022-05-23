import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

interface ISuggestionsObj {
    id: number;
    name: string;
    username: string;
    avatar: string;
    company: string;
}
type ISuggestions = ISuggestionsObj[]


import type { NextPage } from 'next'

const Suggestions: NextPage = () => {
    const [suggestions, setSuggestions] = useState<ISuggestions>([{
        id: 0,
        name: "",
        username: "",
        avatar: "",
        company: ""
    }])
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            id: i,
            name: faker.helpers.contextualCard().name,
            username: faker.helpers.contextualCard().username,
            avatar: faker.helpers.contextualCard().avatar,
            company: faker.helpers.contextualCard().company.name
        }))
        setSuggestions(suggestions)
        console.log({suggestions})
    }, [])

    return (
      <div className='mt-4 ml-10'>
          <div className='flex justify-between text-sm mb-5'>
              <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
              <button className='text-gray-600 font-semibold'>See All</button>
          </div>

          {suggestions.map((profile) => (
              <div key={profile.id} className="flex items-center justify-between mt-3">
                  <img src={profile.avatar} alt="" className='w-10 h-10 rounded-full border p-[2px]'/>
                  <div className='flex-1 ml-4'>
                      <h2 className='font-semibold text-sm'>{profile.username}</h2>
                      <h3 className='text-sm text-gray-400'>Worl at {profile.company}</h3>
                  </div>

                  <button className='text-blue-400 text-sm font-bold'>Follow</button>
              </div>
          ))}
      </div>
    )
}

export default Suggestions
