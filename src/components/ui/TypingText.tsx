'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../ui/motion';

type props = {
    title: string;
    title1: string;
    
}

export const TypingText1 = ({ title, title1}: props) => (
    <>
  <motion.p
    variants={textContainer}
    className="font-normal text-3xl dark:text-white mb-2"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
  <motion.p
    variants={textContainer}
    className="font-normal text-3xl dark:text-white mb-4"
  >
    {Array.from(title1).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
  </>
);

export const TypingText2 = ({ title}: props) => (
    <>
  <motion.p
    variants={textContainer}
    className="font-normal text-3xl dark:text-white mb-2"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
  
  </>
);

// export const TitleText = ({ title}: props) => (
//   <motion.h2
//     variants={textVariant2}
//     initial="hidden"
//     whileInView="show"
//     className="mt-[8px] font-bold md:text-[64px] text-[40px] text-white"
//   >
//     {title}
//   </motion.h2>
// );