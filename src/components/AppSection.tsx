import Image from "next/image";
import { Clock, Dashboard, Filters, Message, Settings, StreamLine, Widget } from "./Icons";
import phoneAgent from "@/public/assets/phone.png";

export default function Agent() {
    return (
        <section
            id="agente"
            className="relative overflow-hidden my-10 sm:py-[70px]"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Grid background */}
          

            <div className="relative max-w-6xl mx-auto w-full">
                <div className="text-center flex flex-col justify-center items-center rounded-2xl mb-[120px]">
                    <h2 className="text-[#152538] text-3xl lg:text-[52px] font-medium  leading-tight">
                        Conheça a Wite Recuperation:
                    </h2>
                    <p className="text-[#152538] text-2xl mt-3">Recuperação inteligente de vendas com I.A</p>
                </div>

                {/* Layout em 3 colunas com o telefone sobrepondo os painéis */}
                <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] items-center bg-gradient-to-b to-[#152538] from-[#152538] sm:rounded-2xl border border-[#2E517A]  sm:my-[40px]"
                    style={{
                        justifyItems: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <div
                        aria-hidden
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: `
            linear-gradient(to left, #2E517A 0.88px, transparent 1px),
            linear-gradient(to bottom, #2E517A 0.88px, transparent 1px)
          `,
                            backgroundSize: "75px 75px",
                        }}
                    />
                    {/* Painel esquerdo */}
                    <div className="w-full order-2 lg:order-1 flex justify-center">
                        <div className="rounded-2xl p-6 md:p-8 text-[#FFFFFF] flex">
                            <div className="flex flex-col gap-8 my-auto">
                                <div className="flex flex-col items-center gap-6 ">
                                    <div className="flex flex-col items-center gap-6  text-center">
                                        <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                                            <Filters />
                                        </div>
                                        <div>
                                            <p className="text-[20px]  text-white/60">
                                                Estratégias inteligentes de conversão automáticas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-6 ">
                                    <div className="flex flex-col items-center gap-6  text-center">
                                        <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                                            <Settings />
                                        </div>
                                        <div>
                                            <p className="text-[20px]  text-white/60">Personalização de perfil ampla para suas ofertas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Telefone central — inclinado, com glow e sombra profunda */}
                    <div className="relative z-10 -mt-3 lg:-mb-12 lg:-mt-9 flex justify-center order-1 lg:order-2">
                        {/* Glow difuso atrás do telefone */}
                        <div className="absolute -inset-6 rounded-[40px]  opacity-60 pointer-events-none" />
                        <div className="relative transform -rotate-6 w-[300px] sm:w-[360px] md:w-[420px]">
                            <Image
                                src={phoneAgent}
                                alt="mockup celular"
                                className="w-full h-auto "
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Painel direito */}
                    <div className="w-full order-3 lg:order-3 flex justify-center">
                        <div className="rounded-2xl p-6 md:p-5 text-white lg:min-h-[360px] flex">
                            <div className="flex flex-col gap-8 my-auto">
                                <div className="flex flex-col items-center gap-6 ">
                                    <div className="flex flex-col items-center gap-6 text-center">
                                        <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                                            <Message />
                                        </div>
                                        <div className="w-full text-xs">
                                            <p className="text-[20px] text-white/60">Mensagens automáticas para carrinhos abandonados</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-6 ">
                                    <div className="flex flex-col items-center gap-6  text-center">
                                        <div className="p-4 flex items-center justify-center rounded-xl bg-[#01AEA40D] ">
                                            <Clock />
                                        </div>
                                        <div>
                                            <p className="text-[20px] text-white/60">
                                                Acompanhamento em tempo real das vendas recuperadas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Linha “fantasma” para forçar os painéis a ficarem por baixo do telefone no overlap */}
                    <div className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 h-[260px] sm:h-[320px] lg:h-[380px] pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
