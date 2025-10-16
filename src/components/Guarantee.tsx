import Image from "next/image";
import { Chart, DashboardIcon, GlobalWallet, LeftArrow, MonitorIcon, Terminal } from "./Icons";
import rocket from "@/public/assets/rocket.png"


const guaranteeItems = [
    {
        id: 1,
        icon: DashboardIcon,
        problem: "Checkout lento e confuso",
        solution: "Compras rápidas e simples.",
        solutionMaxWidth: false
    },
    {
        id: 2,
        icon: GlobalWallet,
        problem: "Poucas opções de pagamento",
        solution: "Aceitamos Pix, Cartão, Boleto e Criptomoedas.",
        solutionMaxWidth: true
    },
    {
        id: 3,
        icon: Terminal,
        problem: "Integração demorada:",
        solution: "Configure em minutos.",
        solutionMaxWidth: false
    },
    {
        id: 4,
        icon: MonitorIcon,
        problem: "Má experiência no mobile:",
        solution: "Funciona perfeitamente em qualquer tela.",
        solutionMaxWidth: true
    }
];

export default function Guarantee() {
    return (
        <section className="bg-[#FAFAFA]  gap-2.5 items-center justify-center px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] w-full max-w-7xl mx-auto rounded-2xl text-[#3B4781]">
                <div className="px-4 sm:px-6 lg:px-0">
                    <p className="bg-[#6D03F51A] py-1 px-6 rounded-[79px] text-[#6D03F5] text-lg w-fit">Garantia</p>

                    <div className="text-[#3B4781] mb-[42px]">
                        <div className="text-3xl sm:text-4xl lg:text-[52px] font-medium my-8">
                            <span className="block">Resolvemos os principais </span>
                            <span className="block">problemas que você enfrenta...</span>
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl max-w-2xl">A conexão final entre o dinheiro do seu cliente e a sua empresa é o checkout, se você escolher mal, coloca toda sua estrutura em risco:</p>
                    </div>

                    {guaranteeItems.map((item, index) => {
                        const Icon = item.icon;
                        const isLast = index === guaranteeItems.length - 1;
                        const isFirst = index === 0;
                        
                        return (
                            <div key={item.id} className="flex flex-col sm:flex-row justify-between mb-12 sm:mb-[84px] items-start sm:items-center relative gap-3 sm:gap-0">
                                <p className="flex text-[#3B4781] gap-4 items-center font-medium text-base sm:text-lg">
                                    <Icon />
                                    {item.problem}
                                </p>
                                <p className={`text-[#3B4781]/60 text-sm sm:text-base text-left sm:text-right ${item.solutionMaxWidth ? 'sm:max-w-[257px]' : ''}`}>
                                    {item.solution}
                                </p>
                                {!isLast && (
                                    <>
                                        {!isFirst && (
                                            <div className="hidden lg:block absolute left-[20px] top-full w-[3px] h-[76px] bg-[#E3EAF7]"></div>
                                        )}
                                        <hr className="absolute left-0 right-0 top-[calc(100%+38px)] h-[1px] border-0 bg-[#E4EBF4]" />
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center lg:items-start lg:ml-5 mt-12 lg:mt-0 px-4 sm:px-6 lg:px-0">
                    <div className="bg-[#6D03F5] w-full max-w-[340px] h-[280px] sm:h-[340px] lg:w-[340px] lg:h-[340px] rounded-2xl relative overflow-visible">
                        <Image
                            src={rocket}
                            alt="Foguete"
                            className="w-full h-full object-cover scale-120 -translate-y-4"
                        />
                    </div>

                    <div className="p-6 sm:p-8 rounded-2xl mt-6 space-y-8 sm:space-y-12 text-center lg:text-left w-full">
                        <div className="flex justify-center lg:justify-start">
                            <Chart />
                        </div>
                        <h1 className="text-[#3B4781] font-medim text-2xl sm:text-[32px]">Comece a escalar agora!</h1>
                        <p className="text-sm sm:text-base text-[#3B4781]/60">É hora de escalar seus resultados para o próximo nível</p>
                    </div>

                    <div className="flex justify-center w-full">
                        <a
                            href="https://painel.witerecuperation.com/login"
                            className="inline-flex items-center justify-between transition-transform duration-200 mb-5 hover:scale-105 bg-[#6D03F5] text-white py-3 px-6 rounded-full w-full max-w-[276px]"
                        >
                            <span className="pl-1 font-semibold text-base">
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
    )
}