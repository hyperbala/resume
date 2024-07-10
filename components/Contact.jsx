"use client";
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";




const Contact = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-bold  lg:border-none border-b-2 border-black'>Contact</h3>
            <div className='px-2'>
                <span>
                    <Link href="balagopaloff@gmail.com" className='flex gap-2 items-center w-fit'>
                        <IoMdMail />
                        <p>Mail</p>
                    </Link>
                </span>
                <span>
                    <LinkPreview url="https://github.com/hyperbala" className="flex gap-2 items-center w-fit text-black">
                        <FaGithub />
                        <p>GitHub</p>
                    </LinkPreview>
                </span>
                <span>
                    <LinkPreview url="https://www.linkedin.com/in/balagopal-r-219926251/" className="flex gap-2 items-center w-fit text-black">
                        <FaLinkedin />
                        <p>LinkedIn</p>
                    </LinkPreview>
                </span>
            </div>
        </div>
    )
}

export default Contact
