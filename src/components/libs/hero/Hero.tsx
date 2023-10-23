import React from "react";
import Typed from "react-typed";
import { buttonVariants } from "@/components/ui/button";
import heroImage from "../../../../public/images/Hepper Token [png].jpg";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/components/ui/motion";

import Image from "next/image";



const Hero = () => {
  return (
    <div className="w-full lg:pt-40 overflow-hidden">
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
      >
        <div className="relative mx-[10rem] text-[3rem] tracking-wide">
          <motion.h1 variants={textVariant(1.1)} className="font-[900] font-serif">
            Hepper Token
          </motion.h1>
          <motion.div
          variants={textVariant(1.2)}
          className="absolute w-[35rem] text-green-500 leading-[3rem]">
            <Typed
              strings={[
                "The new Commander on Chain...",
                "Reflection in USDT...",
                "Automatic Liquidity...",
                "Zero Team Tokens...",
                "No Presale, no Private Deal...",
                "Community Token...",
                // 'Low microCap...'
              ]}
              typeSpeed={40}
              backSpeed={80}
              loop
            />
          </motion.div>
        </div>
        <motion.div
        variants={textVariant(1.3)}
        className=" mx-[10rem] mt-[8rem] text-[1.5rem] gap-8 flex items-center">
          <div className="">
            <button className={buttonVariants({ variant: "join" })}>
              Join us!
            </button>
          </div>
          <div className="">
            <button
              className={buttonVariants({ variant: "chart", size: "sm" })}
            >
              Chart
            </button>
          </div>
        </motion.div>
      </motion.div>


      <motion.div
      variants={slideIn('right', 'tween', 0.5, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      
      >
        <Image
          className="object-cover object-center rounded-full overflow-hidden"
          alt="hero"
          src={heroImage}
          width={250}
          height={250}
        />
      </motion.div>

    </div>
  );
};

export default Hero;
