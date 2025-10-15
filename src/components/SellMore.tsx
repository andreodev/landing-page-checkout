import Image from "next/image";
import { CartIcon, LeftArrow } from "./Icons";
import sales from "@/public/assets/sales.png"


export default function SellMore() {
    return (
        <section className="bg-[#FAFAFA] flex flex-col items-center justify-center my-15 sm:my-24">
            <div className="flex w-full max-w-7xl flex-col justify-center items-center rounded-2xl text-[#3B4781]">
                <div className="flex flex-col items-center gap-12">
                    <Image
                        src={sales}
                        alt="Sales Illustration"
                    />
                    <div className="text-[72px] font-bold text-center leading-tight">
                        <p className="block">
                            <span className="text-white bg-[#6D03F5] px-6 rounded-[8px]">Venda mais.</span> 
                            <span> Perca menos.</span>
                        </p> 
                        <span className="block">Escale com inteligência.</span>
                    </div>

                    <div className="flex items-center justify-between w-full max-w-[967px] gap-8">
                        <div className="text-2xl flex-1 text-[#3B4781]/60">
                            <p>Ative agora o Wite Checkout + a IA da Wite Recuperation e veja sua conversão disparar nos primeiros dias.</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-[#6D03F5] text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold hover:bg-[#5902d4] transition-colors">
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