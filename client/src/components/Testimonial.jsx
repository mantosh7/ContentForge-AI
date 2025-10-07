import {dummyTestimonialData } from '@/assets/assets'
import React from 'react'

const Testimonial = () => {
    return (
        <div className='pt-30 flex flex-col px-4 relative flex flex-col w-full justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-slate-300'>Trusted by <span className='text-primary'>Thousands of Creators</span></h1>
                <p className='mt-3 m-auto text-gray-500'>Inspiration from those shaping the future of content.</p>
            </div>

            <div className='flex flex-wrap justify-content m-12 items-center justify-center'>
                <div className='flex flex-wrap justify-center gap-4'>
                    {dummyTestimonialData.map((review, index) => {
                        return (
                            <div key={index} className='p-6 m-4 max-w-xs rounded-2xl border border-gray-700 cursor-pointer hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all-ease duration-200'
                                onClick={() => navigate(review.path)}>

                                <div className='mt-4 text-[#EEEEEE] italic'>{review.content}</div>

                                <div className='mt-4'>
                                    <div className='flex-1 border-t text-gray-500'></div>
                                </div>

                                <div className='pt-6 text-md'>{review.name}</div>
                                <div>
                                    <p className='text-xs text-gray-400'>{review.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
