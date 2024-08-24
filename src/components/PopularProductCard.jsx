import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL,name,price }) => {
  return (
    <div className='flex flex-col flex-1 w-full'>
        <img src={imgURL} alt="" className='w-[256px] h-[256px]'/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt="" height={24} width={24}  />
            <p className='font-montserrat text-slate-gray leading-normal text-xl'>(4.5)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat leading-normal text-coral-red'>{price}</p>
        
    </div>
  )
}

export default PopularProductCard