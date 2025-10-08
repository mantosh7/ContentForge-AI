import { dummyTestimonialData } from '@/assets/assets'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { RiStarSFill, RiStarSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const PremiumPlan = () => {
    const navigate = useNavigate();
    return (
        <div className='pt-20 flex flex-col px-4 flex flex-col w-full justify-center'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-slate-300'>Choose Your <span className=''>Plan</span></h1>
                <p className=' mt-3 w-lg m-auto text-gray-500'>Get started for free and upgrade as you grow — choose the perfect plan for your content goals..</p>
            </div>

        </div>
    )
}

export default PremiumPlan
