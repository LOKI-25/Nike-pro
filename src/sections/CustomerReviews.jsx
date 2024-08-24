import React from 'react'
import { reviews } from '../constants/index'
import CustomerReviewCard from '../components/CustomerReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-4xl text-center font-bold'>
        What Our 
        <span className='text-coral-red'> Customers</span> Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center '>Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
      <div className='flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((item)=>(
          <CustomerReviewCard key={item.customerName} {...item} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews