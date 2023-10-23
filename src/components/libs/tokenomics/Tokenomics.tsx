import React from "react";
import Link from "next/link";
import Image from "next/image";
import bscscan from "../../../../public/images/2coingeckoicon.png";
import github from "../../../../public/images/Github.png";
import { buttonVariants } from "@/components/ui/button";

const Tokenomics = () => {
  return (
    <div className="border-t-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center w-[35rem]"
                src={github}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-10 items-center">
                  <div className="flex flex-col items-center pb-10">
                    <div className="w-30 h-30 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                      <Image
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={bscscan}
                      />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg dark:text-white">
                    Tokenomics
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>

                  <div className="text-left">
                    <div>
                      <li className="dark:text-white">Project Name</li>
                      <p className="pl-8 text-green-500 font-bold">
                        Hepper Token
                      </p>
                    </div>

                    <div>
                      <li className="dark:text-white">Symbol</li>
                      <p className="pl-8 text-green-500 font-bold">HPT</p>
                    </div>

                    <div>
                      <li className="dark:text-white">Chain</li>
                      <p className="pl-8 text-green-500 font-bold">Bsc</p>
                    </div>

                    <div>
                      <li className="dark:text-white">Total Supply</li>
                      <p className="pl-8 text-green-500 font-bold">
                        1,000,000,000
                      </p>
                    </div>
                  </div>
                </div>
                  </div>
                </div>

              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l font-medium border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div>
                  <h1 className="font-bold dark:text-white">
                    Token Distribution
                  </h1>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="leading-relaxed text-lg mb-4 dark:text-white">
                    <span className="text-green-500">800,000,000 (80%)</span>{" "}
                    will be paired with
                    <span className="text-green-500"> 1.5 BNB</span> and added
                    to the Pancakeswap v2 pair for{" "}
                    <span className="text-green-500">liquidity</span>, while{" "}
                    <span className="text-green-500">200,000,000 (20%)</span>{" "}
                    will be sent to the{" "}
                    <span className="text-green-500">burn address</span>.
                    <span className="text-green-500"> No team tokens</span> as
                    it is purely
                    <span className="text-green-500"> community-driven</span>.
                  </p>
                </div>
                <div className="border-t-[1px]">
                  <h1 className="font-bold mt-4 dark:text-white">
                    Taxes and Limits
                  </h1>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="leading-relaxed text-lg mb-4 dark:text-white">
                    HPT has a <span className="text-green-500"> 7%</span> tax on
                    both <span className="text-green-500"> buy and sell</span>,
                    which includes{" "}
                    <span className="text-green-500 font-bold">3%</span> on USDT
                    redistribution to holders,
                    <span className="text-green-500 font-bold"> 2%</span> on
                    auto liquidity, and{" "}
                    <span className="text-green-500 font-bold"> 2%</span> on
                    marketing and development. The smart contract imposes{" "}
                    <span className="text-green-500 font-bold"> 4% limits</span>{" "}
                    on{" "}
                    <span className="text-green-500 font-bold">
                      {" "}
                      wallet size
                    </span>{" "}
                    and{" "}
                    <span className="text-green-500 font-bold">
                      {" "}
                      2% limits
                    </span>{" "}
                    on{" "}
                    <span className="text-green-500 font-bold">
                      {" "}
                      each transactions
                    </span>{" "}
                    to prevent large token concentrations and price manipulation
                    on launch.
                  </p>
                </div>
                <div className="border-t-[1px] dark:text-white">
                  <h1 className="font-bold mt-4">Liquidity Lock</h1>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="leading-relaxed text-lg mb-4 dark:text-white">
                    {" "}
                    <span className="text-green-500"> 100% liquidity</span> will
                    be <span className="text-green-500"> locked</span> for{" "}
                    <span className="text-green-500"> 3 months</span>, and it
                    will be <span className="text-green-500"> extended</span> at
                    every Marketcap{" "}
                    <span className="text-green-500"> milestone</span>.
                  </p>
                </div>
                <div className="border-t-[1px]">
                  <h1 className="font-bold mt-4 dark:text-white">
                    Revenue Shares
                  </h1>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4 dark:text-white"></div>
                  <p className="leading-relaxed text-lg mb-4 dark:text-white">
                    {" "}
                    You receive automatic rewards in{" "}
                    <span className="text-green-500"> USDT tokens</span> for
                    holding HPT tokens. You are{" "}
                    <span className="text-green-500"> incentivized</span> for
                    sharing your{" "}
                    <span className="text-green-500"> research</span> and
                    conduct due diligence tasks, earning{" "}
                    <span className="text-green-500"> HPT tokens</span> for your
                    contributions. You{" "}
                    <span className="text-green-500"> gain access</span> to
                    exclusive pre-sale{" "}
                    <span className="text-green-500"> opportunities</span> for
                    vetted projects, providing a competitive advantage in the
                    crypto market.
                  </p>
                </div>
                <Link className="inline-flex items-center" href={"/"}>
                  <button className={buttonVariants({ variant: "hiw" })}>
                    How to buy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;
