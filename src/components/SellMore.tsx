import Image from "next/image";
import { CartIcon, LeftArrow } from "./Icons";
import sales from "@/public/assets/sales.png"


export default function SellMore() {
    return (
        <section className="bg-[#FAFAFA] flex flex-col items-center justify-center my-15 sm:my-24 px-4 sm:px-6 lg:px-0">
            <div className="flex w-full max-w-7xl flex-col justify-center items-center rounded-2xl text-[#3B4781]">
                <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-12">
                    <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none">
                        <Image
                            src={sales}
                            alt="Sales Illustration"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-bold text-center leading-tight px-4 sm:px-0">
                        <p className="block">
                            <span className="text-white bg-[#6D03F5] px-3 sm:px-4 lg:px-6 rounded-[8px]">Venda mais.</span> 
                            <span> Perca menos.</span>
                        </p> 
                        <span className="block">Escale com inteligência.</span>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[967px] gap-6 lg:gap-8 px-4 sm:px-0">
                        <div className="text-base sm:text-lg md:text-xl lg:text-2xl flex-1 text-[#3B4781]/60 text-center lg:text-left">
                            <p>Ative agora o Wite Checkout + a IA da Wite Recuperation e veja sua conversão disparar nos primeiros dias.</p>
                        </div>
                        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
                            <button className="bg-[#6D03F5] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-3 text-base sm:text-lg font-semibold hover:bg-[#5902d4] transition-colors w-full sm:w-auto max-w-[280px] sm:max-w-none justify-center">
                                Começar Agora
                                <LeftArrow />
                            </button>
                        </div>
                    </div>
                </div>
               
            </div>

            
        </section>
   )
}