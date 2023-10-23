import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn } from "@/components/ui/motion";
import { zoomIn } from '@/components/ui/motion';
import bscscan from "../../../../public/images/1bscscan.png"
import dextools from "../../../../public/images/dextools.png"
import pnckswp from "../../../../public/images/4Pancakeswap.png"

const Partners = () => {
    
    return (
        <div>
            <section className="dark:bg-white p-5 bg-green-500 dark:bg-opacity-10 backdrop-filter backdrop-blur-lg
             text-white border-t-4">
            <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 1, 2)}
            className="absolute w-full h-[300px] gradient-02 rounded-tl-[140px] z-[0] -top-[30px]" />
                <div className="container px-5 py-24 mx-auto">
                    <motion.div
                    variants={zoomIn(0.4, 1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true}}
                
                    className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">Partners</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Hepper token aims to empower the crypto community, 
                        promote diligent research, and create a more secure and trustworthy environment for investors and enthusiasts. 
                        It offers a unique blend of features to foster active participation and financial security within the crypto ecosystem.</p>
                    </motion.div>

                  
                    <div className="flex flex-col md:flex-row">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex justify-center cursor-pointer">
                                <Image alt="gallery" className=" inset-0 w-[200px] object-cover object-center" src={bscscan} />
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex justify-center cursor-pointer">
                                <Image alt="gallery" className="inset-0 w-[200px] object-cover object-center" src={pnckswp} />
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex justify-center cursor-pointer">
                                <Image alt="gallery" className=" inset-0 w-[200px] object-cover object-center" src={dextools} />
                            </div>
                        </div>
                      
                    </div>
                  
                </div>
            </section>
        </div>
    )
}

export default Partners