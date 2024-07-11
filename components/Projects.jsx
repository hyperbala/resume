import React from 'react'

const projectsData = [
    {
        title: "Link Up",
        description: "A web application for video calling",
        features: "Easy Room Creation and Code-Based Joining. Users can create a virtual meeting room with just a few clicks and participants can join the meeting by simply entering this unique code",
        tech: "Next.js, Socket.IO, PeerJS, Tailwind CSS"
    },
    {
        title: "Notes",
        description: "A web application for capturing your thoughts and viewing them.",
        features: "Ensures your content remains private and accessible only with your personalized credentials, guaranteeing a confidential and personalized note-taking experience.",
        tech: "NextJS, MongoDB, Tailwind CSS"
    }
];

const Projects = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-sky-500 text-lg font-bold  lg:border-none border-b-2 border-black'>Projects</h3>
            <ul className='list-disc px-4'>
                {projectsData.map((project, index) => (
                    <li key={index} className='mb-5 flex flex-col gap-1'>
                        <div className='flex gap-2'>
                            <p className='font-semibold'>{project.title}:</p>
                            <p>{project.description}</p>
                        </div>
                        <ul className='flex flex-col px-5'>
                            <li className='grid grid-cols-[80px_1fr] gap-2'>
                                <p className='font-semibold'>Features:</p>
                                <p>{project.features}</p>
                            </li>
                            <li className='grid grid-cols-[80px_1fr] gap-2'>
                                <p className='font-semibold'>Tech:</p>
                                <p>{project.tech}</p>
                            </li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Projects
