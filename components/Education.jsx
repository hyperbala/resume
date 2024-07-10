import React from 'react'

const Education = () => {
    return (
        <div className='flex flex-col gap-3 '>
            <h3 className='text-lg font-bold lg:border-none border-b-2 border-black'>Education</h3>
            <div className='flex flex-col gap-1 px-3 lg:px-2 lg:w-11/12'>

                <span className='flex  items-center justify-between '>
                    <p className='font-medium'>IIIT Kottayam</p>
                    <p className='text-sm'>Kerala, India</p>
                </span>
                <span className='flex  items-center justify-between'>
                    <p className='font-normal'>Bachelor of Technology - CSE</p>
                    <p className='text-sm'>Sept 2022 - Apr 2026</p>
                </span>
            </div>
        </div>
    )
}

export default Education
