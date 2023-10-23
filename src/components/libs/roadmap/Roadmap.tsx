import React from "react";
import Container from "@/components/ui/container";
import { motion } from "framer-motion";
import {
  timeLineFadeIn,
  stageSlideIn
} from "@/components/ui/motion";

const Roadmap = () => {
  return (
    <>
    <div className="border-t-4 mb-10"></div>
    <h2 className="font-bold text-2xl text-center text-gray-900 dark:text-white">Road Map</h2>
    <Container className="overflow-hidden relative flex pl-4 mb-16">
      
      <div className="border-gray-900 w-2 absolute inset-0 flex items-center justify-center mt-4 ml-2">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <ol className="border-gray-200 dark:border-gray-700 ml-4">
        <li className="mb-10 ml-4">
          <motion.div
            variants={timeLineFadeIn("right", "tween", 0.3, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute z-50 w-3 h-3 bg-green-500 rounded-full mt-[9px] left-[5.2px] border border-white dark:border-gray-900 dark:bg-gray-700"
          ></motion.div>

          <motion.h2
            variants={stageSlideIn("right", "tween", 0.6, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Stage 1
          </motion.h2>

          <motion.div
            variants={stageSlideIn("right", "tween", 0.9, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Project development.</p>
          </motion.div>

          <motion.div
            variants={stageSlideIn("right", "tween", 1.2, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">HPT Whitelist spot allocation.</p>
          </motion.div>

          <motion.div
            variants={stageSlideIn("right", "tween", 1.5, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Stealth launch on BSC</p>
          </motion.div>

          <motion.div
            variants={stageSlideIn("right", "tween", 1.8, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Reward dashboard launch.</p>
          </motion.div>
        </li>

        {/* Stage 2 */}
        <li className="mb-10 ml-4">
          <motion.div
          variants={timeLineFadeIn("right", "tween", 2.1, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute w-3 h-3 bg-green-500 rounded-full mt-[9px] left-[5.2px] border border-white dark:border-gray-900 dark:bg-gray-700"></motion.div>


          <motion.h2
           variants={stageSlideIn("right", "tween", 2.4, 2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className="text-lg font-semibold text-gray-900 dark:text-white">
            Stage 2
          </motion.h2>

          <motion.div
          variants={stageSlideIn("right", "tween", 2.7, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Marketing campaign.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 3, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Game development and launch.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 3.3, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Marketing through influencers.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 3.6, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Development report for stage 2.</p>
          </motion.div>
        </li>

        {/* Stage 3 */}
        <li className="mb-10 ml-4">
          <motion.div
           variants={timeLineFadeIn("right", "tween", 3.9, 2)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
          className="absolute w-3 h-3 bg-green-500 rounded-full mt-[9px] left-[5.2px] border border-white dark:border-gray-900 dark:bg-gray-700"></motion.div>
          <motion.h2
          variants={stageSlideIn("right", "tween", 4.2, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-900 dark:text-white">
            Stage 3
          </motion.h2>
          <motion.div
          variants={stageSlideIn("right", "tween", 4.5, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Community contest.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 4.8, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Coingecko and Coinmarketcap listing.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 5.1, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className=""> Other listings.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 5.4, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Development report for stage 3.</p>
          </motion.div>
        </li>

        {/* Stage 4 */}
        <li className="ml-4">
          <motion.div
          variants={timeLineFadeIn("right", "tween", 5.7, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute w-3 h-3 bg-green-500 rounded-full mt-[9px] left-[5.2px] border border-white dark:border-gray-900 dark:bg-gray-700"></motion.div>

          <motion.h2
          variants={stageSlideIn("right", "tween", 6, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg font-semibold text-gray-900 dark:text-white">
            Stage 4
          </motion.h2>

          <motion.div
          variants={stageSlideIn("right", "tween", 6.3, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">First partnership announcement.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 6.6, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Community research.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 6.9, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">Spot allocation.</p>
          </motion.div>


          <motion.div
          variants={stageSlideIn("right", "tween", 7.2, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-green-500 w-3 h-3 flex-shrink-0 m-2"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <p className="">first partner &quot;Go Live!&quot;.</p>
          </motion.div>
        </li>
      </ol>
    </Container>
    </>

    // <div className='border-t-4'>
    //     <section className="text-gray-600 body-font">
    //         <div className="container px-5 py-24 mx-auto flex flex-wrap">

    //             {/* Stage 1 */}
    //             <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

    //                 <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    //                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                 </div>

    //                 <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 relative"></div>

    //                 <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    //                     <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
    //                         <div>
    //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Stage 1</h2>
    //                             <div className='block'>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Project development.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">HPT Whitelist spot allocation.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Stealth launch on BSC</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Reward dashboard launch.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>

    //                 </div>
    //             </div>

    //             {/* Stage 2 */}
    //             <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto border-t-2">
    //                 <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    //                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                 </div>

    //                 <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative"></div>

    //                 <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    //                     <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
    //                         <div>
    //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl mt-8">Stage 2</h2>
    //                             <div className='block'>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Marketing campaign.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Game development and launch.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Marketing through influencers.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Development report for stage 2.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Stage 3 */}
    //             <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto border-t-2">
    //                 <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    //                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                 </div>
    //                 <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative"></div>
    //                 <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    //                     <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
    //                         <div>
    //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl mt-8">Stage 3</h2>
    //                             <div className='block'>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Community contest.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Coingecko and Coinmarketcap listing.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className=""> Other listings.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Development report for stage 3.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //             {/* Stage 4 */}
    //             <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto border-t-2">
    //                 <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
    //                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    //                 </div>
    //                 <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative"></div>
    //                 <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
    //                     <div className="flex flex-grow sm:pl-6 mt-6 sm:mt-0">
    //                         <div>
    //                             <h2 className="font-medium title-font text-gray-900 mb-1 text-xl mt-8">Stage 4</h2>
    //                             <div className='block'>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">First partnership announcement.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Community research.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">Spot allocation.</p>
    //                                 </div>
    //                                 <div className='flex'>
    //                                     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-500 w-3 h-3 flex-shrink-0 m-2" viewBox="0 0 24 24">
    //                                         <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
    //                                         <path d="M22 4L12 14.01l-3-3"></path>
    //                                     </svg>
    //                                     <p className="">first partner &quot;Go Live!&quot;.</p>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // </div>
  );
};

export default Roadmap;
