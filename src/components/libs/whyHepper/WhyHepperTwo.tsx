import React from "react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/components/ui/motion";
import { TypingText2 } from "@/components/ui/TypingText";

const WhyHepperTwo = () => {
  return (
    <div className="border-t-4">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div
            variants={staggerContainer(0.01, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <TypingText2 title="Automatic Reflection in USDT" title1={""} />
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="mb-8 leading-relaxed max-w-lg dark:text-white"
            >
              HPT holders receive automatic rewards in USDT tokens every 5 hours
              based on the percentage of HPT tokens they hold, providing a
              passive income stream. With Hepper token you don’t need to stake
              or add liquidity to the pool for rewards, just hold and earn free
              tokens from every transactions.
            </motion.p>
            <div className="flex justify-center">
              <button className={buttonVariants({ variant: "hiw" })}>
                Go to Reward Page
              </button>
            </div>
          </motion.div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={""}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyHepperTwo;
