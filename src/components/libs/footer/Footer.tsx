import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { BsGooglePlay, BsApple } from "react-icons/bs";
import { motion } from "framer-motion";
import { footerVariants } from "@/components/ui/motion";


const Footer = () => {
  return (
    <>
      <div className="border-t-4 mb-4"></div>
      <motion.footer
       variants={footerVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
      className="padding-x relative">
        <div className="footer-gradient" />
        <div className="mx-auto flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
            {/* Info */}
            <div>
              <h2 className="mb-6 font-lato font-semibold text-gray-900 uppercase dark:text-white">
                Info
              </h2>
              <ul className="text-gray-500 text-sm dark:text-gray-400 font-fundamento font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Bscscan
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Poocoin
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Whitepaper
                  </a>
                </li>
              </ul>
            </div>

            {/* Help center */}
            <div>
              <h2 className="mb-6 font-semibold font-lato text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-sm text-gray-500 dark:text-gray-400 font-fundamento font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    How to buy
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    How it works
                  </a>
                </li>

                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us (Partnership)
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h2 className="mb-6 font-semibold font-lato text-gray-900 uppercase dark:text-white">
                Socials
              </h2>
              <ul className="text-gray-500 text-sm dark:text-gray-400 font-fundamento font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Telegram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Medium
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            {/* download */}
            {/* <div>
        <h2 className="mb-6 font-semibold font-lato text-gray-900 uppercase dark:text-white">
          Download
        </h2>
        <ul className="text-gray-500 text-sm dark:text-gray-400 font-fundamento font-medium">
          <li className="mb-4">
            <Link
              href="/"
              className="flex px-2 py-2 w-[135px] w bg-green-500 gap-2 items-center rounded-lg"
            >
              <BsApple className="self-center text-white" size={25} />
              <div className="flex flex-col text-white">
                <p>Download on</p>
                <p>App Store</p>
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href="/"
              className="flex px-2 py-2 w-[135px] w bg-green-500 gap-2 items-center rounded-lg"
            >
              <BsGooglePlay className="self-center text-white" size={25} />
              <div className="flex flex-col text-white">
                <p>Download on</p>
                <p>Google Play</p>
              </div>
            </Link>
          </li>
        </ul>
      </div> */}
          </div>
          <div className="px-4 py-6 bg-[#F1F4FB] dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-black font-fundamento dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://ourbrand.com/">Team Hepper</a>. All Rights
              Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a
                href="#"
                className="text-green-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-green-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
