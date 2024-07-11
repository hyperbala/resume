import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col gap-3 '>
            <h3 className='text-sky-500 text-lg font-bold lg:border-none border-b-2 border-black'>Education</h3>
            <div className='flex flex-col gap-0 px-4 lg:px-4 lg:w-11/12'>

                <span className='flex  items-center justify-between '>
                    <p className='font-medium'>IIIT Kottayam</p>
                    <p className='text-sm'>Kerala, India</p>
                </span>
                <span className='flex z items-center justify-between'>
                    <p className='font-normal text-base'>Bachelor of Technology - CSE</p>
                    <p className='text-sm'>2022 - 2026</p>
                </span>
            </div>
        </div>
    )
}

export default Education
