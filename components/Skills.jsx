import React from 'react'

const skillsData = [
    {
        category: "Languages",
        items: "JavaScript, TypeScript, HTML5, CSS3, Python, C, C++"
    },
    {
        category: "Frameworks",
        items: "React.js, Node.js, ExpressJS, Next.js, TailwindCSS, Mongoose"
    },
    {
        category: "Databases ",
        items: "MySQL, MongoDB"
    }
];

const Skills = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold  lg:border-none border-b-2 border-black'>Skills</h3>
            <ul className='list-none px-2'>
                {skillsData.map((skill, index) => (
                    <li key={index} className='grid grid-cols-[120px_1fr]'>
                        <p className='font-semibold'>{skill.category}:</p>
                        <p>{skill.items}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills
