"use client"

import React from 'react'
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/ui/motion";
import { TypingText1 } from '@/components/ui/TypingText';


const WhyHepper = () => {
    return (
       
        <div className='border-t-4'>
            <section className="text-gray-600 body-font">
                
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src={""} />
                    </div>

                    <motion.div
                    variants={staggerContainer(0.01, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <TypingText1 title="Solution to the Crypto Community" title1="Community Distrust"
                        />
                        <motion.p
                        variants={fadeIn("up", "tween", 0.2, 1)}
                        className="mb-8 leading-relaxed max-w-lg dark:text-white">We are building a large community of crypto traders, auditors, developers, and so on 
                         to build trust, transparency, and active community participation in the crypto space by addressing 
                        the issues and concerns commonly associated with the industry. 
                        We design a unique combination of features to encourage responsible investment and involvement in the crypto market. </motion.p>
                        <div className="flex justify-center">
                        <button
                            className={buttonVariants({ variant: "hiw" })}
                        >
                            Learn How Hepper Works
                        </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default WhyHepper