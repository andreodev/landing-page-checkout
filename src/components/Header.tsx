"use client"

import { LeftArrow } from "./Icons";
import { motion } from "framer-motion";
import Notifications from "./Notifications";

export default function Header() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center text-center min-h-[85vh] sm:min-h-screen overflow-hidden bg-gradient-to-t to-[#8200FE] from-[#5505EC]  ">
                <div className="  px-4 sm:px-0 ">
                    <h1 className="text-3xl mt-24 sm:text-[52px] max-w-2xl font-bold bg-clip-text text-transparent bg-white leading-tight">
                        Você vende em qualquer
                        <span className="block">lugar do mundo com</span>
                        <span className="block">o poder da Wite Checkout</span>
                    </h1>
                </div>
                <p className=" text-white text-base max-w-4xl p-10 sm:p-0 my-8  sm:text-[20px] font-extralight ">
                    Com o Wite Checkout você vende no Brasil e no exterior com um clique.
                </p>
                <div className="hidden 2xl:block">
                    <Notifications />
                </div>
                <div className="mt-0 sm:mt-4 gap-5 flex">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white p-2 sm:p-3.5 rounded-[52px] cursor-pointer flex gap-5 items-center">
                        <a href="#form" className="text-[#6D03F5] font-semibold text-base ml-2">Começar Agora</a>
                        <div className="bg-[#6D03F5] flex items-center p-2 sm:px-6 rounded-[9000px] py-2.5"><LeftArrow /></div>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border  border-[#FFFFFF80] cursor-pointer py-3.5 sm:px-8 rounded-[52px] p-2 text-white font-medium text-base gap-5 hidden sm:block w-[180px]" >Saiba mais</motion.button>
                </div>
            </div>
        </>
    );
}