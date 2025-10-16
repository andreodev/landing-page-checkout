"use client"

import Image from 'next/image';
import operationImage from '@/public/assets/operation.png'
import { LeftArrow, Star, TrendUp } from './Icons'

export default function Solution() {
    return (
        <section className="w-full my-18 px-4 md:px-0">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center mx-auto gap-6 md:gap-0">
                <div className='relative sm:my-[0px] bg-[#6D03F5] rounded-2xl overflow-visible p-4 md:p-8 w-full md:w-auto'>
                    <Image
                        src={operationImage}
                        alt="Operation Illustration"
                        className="w-full h-full relative md:-top-2 md:-left-16 md:rotate-[-2deg] md:scale-110"
                    />
                </div>

                <div className="bg-white rounded-2xl flex items-center p-4 h-full justify-center max-w-xl mx-auto w-full">
                    <div className="text-center">
                        <div className=" sm:my-5 inline-flex items-center justify-center rounded-full bg-white ">
                            <TrendUp />
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#3B4781] ">
                            Solução de verdade para sua empresa
                        </h2>

                        <div className='flex flex-col sm:flex-row items-center justify-center max-w-[327px] gap-3 my-6 md:my-10 mx-auto'>
                            <div className='bg-[#6D03F51A] text-[#6D03F5] rounded-lg flex items-center py-2.5 px-3.5'>
                                <span className='inline-flex items-center gap-1'><Star /></span>
                                <span className='ml-2 font-semibold'>4.7</span>
                            </div>

                            <div className='text-center sm:text-start'>
                                <p className='text-base text-[#6D03F5] '>Avaliação dos clientes</p>
                            </div>
                        </div>

                        <a
                            href="https://painel.witerecuperation.com/login"
                            className="inline-flex items-center justify-between transition-transform duration-200 mb-5 hover:scale-105 bg-[#6D03F5] text-white py-3 px-6 rounded-full  w-full max-w-[320px]"
                        >
                            <span className="pl-1 font-semibold text-base ">
                                Começar Agora
                            </span>
                            <span className="inline-flex items-center justify-center bg-white text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                                <LeftArrow color='#6D03F5' />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}