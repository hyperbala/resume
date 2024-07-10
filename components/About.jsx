import React from 'react'

const About = () => {
    const text="I am a full stack developer with expertise in React and Next.js, dedicated to building dynamic and scalable web applications. My proficiency in both frontend and backend technologies allows me to create seamless user experiences and efficient,  solutions."

    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold  lg:border-none border-b-2 border-black'>About</h3>
            <p className='px-2'>{text}</p>
        </div>
    )
}

export default About
