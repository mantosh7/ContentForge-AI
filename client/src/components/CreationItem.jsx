import React, { useState } from 'react'
import Markdown from 'react-markdown';

const CreationItem = ({item}) => {
  const [expanded, setExpanded] = useState(false) ;

  return (
    <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-md border-1 border-gray-600  rounded-xl cursor-pointer 
      bg-gradient-to-r from-[#1e130c] to-[#9a8478] text-white'>
      <div className='flex justify-between items-center gap-4'>
        <div>
            <h1 className='font-semibold text-lg'>{item.prompt}</h1>
            <p>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
        </div>
        <button className=' border-gray-700 text-white font-semibold px-4  py-1 rounded-xl cursor-pointer bg-gradient-to-r from-[#000000] to-[#434343]'>{item.type}</button>
      </div>

      {expanded && (
        <div className='text-white'>
          {item.type === 'image' ? (
            <div>
              <img src={item.content} alt='Image' className='mt-3 w-full h-auto max-w-md' />
            </div>
          ) : (
            <div className='mt-3 overflow-y-scroll text-sm h-48'>
                <div className='reset-tw'>
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
