import React from 'react'

const ShowcaseCard = ({img, topic}) => {
  return (
    <>
        <div className="w-[310px]">
            <img src={img} alt="image" width={300} className='rounded-xl'/>
            <h1 className=' mt-2 text-2xl font-semibold'>
                {topic}
            </h1>
        </div>
    </>
  )
}

export default ShowcaseCard