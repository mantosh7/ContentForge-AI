import { AiToolsData } from '@/assets/assets'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AiTools = () => {
  const navigate = useNavigate() ;

  return (
    <div className='pt-30'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-slate-300'>Ultimate AI Toolkit</h1>
        <p className='mt-3 max-w-xl m-auto text-gray-500'>Craft smarter, better, and faster content with AI.</p>
      </div>

      <div className='flex flex-wrap justify-content'>
        {AiToolsData.map((tool, index) => {
            <div key={index} className='p-8 m-4 max-w-xs rounded-lg shadow-lg border border-gray-100 cursor-pointer'
            onClick={()=>user && navigate(tool.path)}>
              <tool.Icon className='w-12 h-12 p-3 text-white rounded-xl' style={{background:`linear-gradient(to bottom, ${tool.bg.from},${tool.bg.to})`}} />
            </div>
        })}
      </div>
    </div>
  )
}

export default AiTools
