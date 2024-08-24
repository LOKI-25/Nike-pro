import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <img src={imgURL} alt="" className='rounded-full object-cover w-[120px] h-[120px]' />
        <p className='info-text text-center mt-6 max-w-sm'>{feedback}</p>
        <div className='mt-3 flex justify-center items-center gap-2'>
            <img src={star} width ={24} height={24} className='object-contain m-0' alt="" />
            <p className='font-montserrat text-xl text-slate-gray'>({rating})</p>
        </div>
        <h3 className='mt-1 text-center font-palanquin font-bold text-3xl'>{customerName}</h3>
    </div>
  )
}

export default CustomerReviewCard
