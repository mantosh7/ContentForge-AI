import React, { useState } from 'react'
import Markdown from 'react-markdown';

const CreationItem = ({item}) => {
  const [expanded, setExpanded] = useState(false) ;

  return (
    <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-md border-1 border-gray-400  rounded-xl cursor-pointer 
      bg-[#faf4f4ff] text-black'>
      <div className='flex justify-between items-center gap-4'>
        <div>
            <h1 className='font-semibold text-lg '>{item.prompt}</h1>
            <p className='font-semibold '>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
        </div>
        <button className='border border-gray-500 font-medium px-4  py-1 rounded-2xl cursor-pointer bg-gray-400'>{item.type}</button>
      </div>

      {expanded && (
        <div className=''>
          {item.type === 'image' ? (
            <div>
              <img src={item.content} alt='Image' className='mt-3 w-full h-auto max-w-md' />
            </div>
          ) : (
            <div className='mt-3 overflow-y-scroll text-sm h-48'>
                <div className='reset-tw font-medium'>
                  <Markdown>{item.content}</Markdown>
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CreationItem
