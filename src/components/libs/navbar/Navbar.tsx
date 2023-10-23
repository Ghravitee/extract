"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants} from "@/components/ui/motion";

import heroImage from "../../../../public/images/Hepper Token [png].jpg";

import Link from "next/link";
import { PiShoppingCartSimpleBold, PiHandbagBold } from "react-icons/pi";
import {
  MdOutlineFavoriteBorder,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
} from "react-icons/md";
import { BiSearchAlt, BiCreditCardAlt, BiHelpCircle } from "react-icons/bi";
import { BsPerson, BsBell, BsPencil, BsChatLeftDots } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose, TfiTicket } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import ThemeToggle from "@/components/ui/theme-toggle";

import { buttonVariants } from "@/components/ui/button";

// import { signOut, signIn, useSession } from "next-auth/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // const { data: session } = useSession();
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <motion.nav
       variants={navVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
        className="fixed top-0 z-50 bg-white dark:bg-[#020817] w-full flex justify-between items-center gap-4 lg:justify-evenly py-4 px-4 lg:px-0 border-b-2"
      >
        <motion.div
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className="md:flex gap-4"
        >
          <Link href="/">
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src={heroImage}
              width={50}
              height={50}
            />
          </Link>
        </motion.div>

        <div className="hidden md:flex gap-6 font-mono font-normal">
          <div className="">
            <div className=" relative border-none hover:text-green-500 inline-flex">
              <Link href="/">
                <p>Why hepper?</p>
              </Link>
            </div>
          </div>

          <div className="">
            <div className=" relative border-none hover:text-green-500 inline-flex">
              <Link href="/">
                <p>How it works</p>
              </Link>
            </div>
          </div>

          <div className="">
            <div className=" relative border-none hover:text-green-500 inline-flex">
              <Link href="/">
                <p>Tokenomics</p>
              </Link>
            </div>
          </div>

          <div className="">
            <div className=" relative border-none hover:text-green-500 inline-flex">
              <Link href="/">
                <p>Roadmap</p>
              </Link>
            </div>
          </div>
          <div className="">
            <div className=" relative border-none hover:text-green-500 inline-flex">
              <Link href="/">
                <p>Socials</p>
              </Link>
              <div>
                <div className="hidden">
                  <MdOutlineArrowDropDown size={20} />
                </div>
                <div className="">
                  <MdOutlineArrowDropUp size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-4 items-center hover:text-green-500">
          <div>
            <button
              className={buttonVariants({ variant: "welcome", size: "sm" })}
            >
              Launch App
            </button>
          </div>

          <div>
            <button
              className={buttonVariants({ variant: "welcome", size: "sm" })}
            >
              Play Game
            </button>
          </div>
        </div>

        {/* Toggle button for dark mode */}

        {mounted && <ThemeToggle />}

        <div
          className="self-end ease-in-out duration-1000 block md:hidden mb-[4px]"
          onClick={handleNav}
        >
          <div className="hover:text-green-500">
            {" "}
            <RiMenu3Fill size={20} className="cursor-pointer" />
          </div>
        </div>

        <div
          className={`fixed right-0 top-0 z-50 w-[70%] h-full bg-white  ${
            nav ? "translate-x-0" : "translate-x-full"
          } md:hidden ease-in-out duration-1000  w-[-100%]`}
        >
          <div
            onClick={handleNav}
            className="flex justify-end pt-4 pr-8 hover:text-green-500"
          >
            {nav ? <TfiClose size={20} className="text-black" /> : ""}
          </div>

          <div className="py-8 px-4 text-black font-light text-sm">
            <div className="font-lato font-bold text-sm">
              <div className="flex">
                <Link href="/">
                  <p className="ml-4">Why hepper?</p>
                </Link>
              </div>
              <div className="flex py-6">
                <Link href="/">
                  <p className="ml-4">How it works</p>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <p className="ml-4">Tokenomics</p>
                </Link>
              </div>
              <div className="flex py-6">
                <Link href="/">
                  <p className="ml-4">Roadmap</p>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <p className="ml-4">Socials</p>
                </Link>
              </div>
            </div>

            <div className="inline-flex mt-20 ">
              {/* <p className="ml-4">LOG OUT</p> */}
              <div className="ml-4">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "welcome" })}
                >
                  Play Game
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
