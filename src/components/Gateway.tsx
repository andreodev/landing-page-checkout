

import Image from "next/image";
import { Templates, Link, Monitor, LeftArrow, BitcoinConvert } from "./Icons";
import coins from "@/public/assets/coins.png"


export default function Gateway() {


    const CARDS = [
        {
            id: 1, title: 'Multíplas moedas',
            description: 'Vendas sem fronteiras: receba em diferentes moedas e facilite a compra para clientes do mundo todo.', icon: <Templates />
        },
        {
            id: 2, title: 'Integração Rápida',
            description: 'Conecte seu negócio em poucos passos. Nossa integração foi pensada para ser prática e agilizar seu começo.', icon: <Link />
        },
        {
            id: 3, title: 'Responsividade avançada',
            description: 'Checkout adaptado para qualquer tela. Do celular ao computador, a experiência de compra é sempre rápida e eficiente.', icon: <Monitor />
        },
    ]

    return (
        <div className="my-24" id="vantagens">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl p-5 justify-items-center mx-auto items-stretch">
                <div className="space-y-12 w-full flex flex-col items-center md:items-stretch">
                    {CARDS.map((card) => (
                        <div key={card.id} className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg p-5 sm:p-10">
                            <div className="flex items-center gap-4 sm:gap-5">
                                {card.icon}
                                <h1 className="text-[#3B4781] font-medium text-base">{card.title}</h1>
                            </div>
                            <p className="mt-3 sm:mt-4 text-[#3B4781] text-sm sm:text-[14px]">{card.description}</p>
                        </div>
                    ))}
                </div>
                <div className=" bg-white w-full h-full rounded-2xl">
                    <div className="w-full py-[53px] px-[43px] h-full bg-white rounded-2xl items-center flex flex-col ">
                        <div className="">
                            <BitcoinConvert />
                        </div>
                        <div className="border border-[#6D03F51A] py-2 px-2 h-[37px] items-center rounded-full gap-2.5 my-4 flex">
                            <div className="bg-[#6D03F51A] py-1 px-2.5 rounded-[79px] gap-2.5 text-[#6D03F5] text-xs">
                                <h1>NOVO</h1>
                            </div>
                            <p className="text-base text-[#6D03F5]">Exclusividade WitePay</p>
                        </div>
                        <div className="items-center text-center mx-auto">
                            <h1 className=" text-[#3B4781] font-medium text-[32px] max-w-sm ">Faça vendas por criptomoedas</h1>
                            <p className="text-base text-[#3B4781]/60 mt-4 max-w-[336px] text-center mx-auto">Abra novas possibilidades para o seu negócio. Mais opções para o cliente, mais oportunidades de venda para você.</p>
                            <div className="my-8">

                                <a
                                    href="https://painel.witerecuperation.com/login"
                                    className="inline-flex gap-5  items-center justify-between transition-transform duration-200 hover:scale-105 bg-[#6D03F5] text-white py-4  rounded-full  w-full max-w-[240px]"
                                >
                                    <a href="#form" className="ml-5 font-semibold text-base ">
                                        Começar Agora
                                    </a>
                                    <span className="inline-flex items-center justify-center mr-3.5 bg-white text-[#01AEA4] rounded-full w-[62px] h-[32px]">
                                        <LeftArrow color='#6D03F5' />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative ">
                            <div className="absolute sm:left-1/6 sm:-translate-x-1/4  sm:z-10">
                                <Image
                                    alt="coins image"
                                    src={coins}

                                    className="  sm:max-w-none h-auto"
                                />
                            </div>
                            <div className="border border-[#C0D3F2] rounded-2xl pt-36 ">
                                <p className="pt-6 text-center text-base text-[#3B4781] px-4 pb-3.5">Venda com <span className="font-medium text-[#6D03F5]/60">+100 Criptomoedas diferentes</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}