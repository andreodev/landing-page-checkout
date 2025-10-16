"use client"

import Image from 'next/image';
import Link from 'next/link';
import logo from "@/public/assets/WiteLabel.png"
import { ApplePay, PlayStore } from './Icons';

export default function Footer() {


    return (
        <footer className="mt-16 bg-gradient-to-r from-[#8200FE] to-[#5505EC] text-white/70">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-start md:items-start text-left md:text-left">
                    <div className="space-y-5 flex flex-col items-start md:items-start w-full md:w-auto">
                        <Image src={logo} alt="WhiteLabel" width={287} height={76} className="w-48 sm:w-64 md:w-[287px] h-auto" />
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="text-sm opacity-90">
                            <div className="space-y-2">
                                <div className="font-medium">
                                    <a href="#vantagens">Página inicial</a>
                                </div>
                                <div>
                                    <a href="#templates">Templates</a>
                                </div>
                                <div>
                                    <a href="#vantagens">Vantagens</a>
                                </div>
                                <div>
                                    <a href="#experiencia">Experiência de usuário</a>
                                </div>
                                <div>
                                    <a href="#primeiros-passos">Primeiros passos</a>
                                </div>
                                <div>
                                    <a href="#aplicativo">Aplicativo</a>
                                </div>
                                <div>
                                    <a href="#pergunta-frequentes">Perguntas frequentes</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end w-full md:w-auto">
                        <div className="bg-white/4 rounded-lg py-6 px-5 gap-[18px] w-full sm:w-[248px] md:w-[248px] md:h-[222px] border border-white/8">
                            <div className="text-sm mb-3 text-white">Baixe o nosso aplicativo</div>
                                <div className="space-y-3">
                                    <div className="bg-white/8 rounded-md p-3 flex items-center gap-3 w-full sm:w-[208px]" >
                                        <div className="w-8 h-8 rounded flex items-center justify-center"><PlayStore /></div>
                                        <div className="text-xs">Disponível no<br/><strong className='text-white'>Google Play</strong></div>
                                    </div>
                                <div className="bg-white/8 rounded-md p-3 flex items-center gap-3 w-full sm:w-[208px]">
                                        <div className="w-8 h-8  rounded flex items-center justify-center "><ApplePay /></div>
                                        <div className="text-xs">Disponível na<br/><strong className='text-white'>App Store</strong></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-white/18" />

                <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center text-sm opacity-90 gap-3 md:gap-0">
                    <div className="mb-3 md:mb-0">
                        © 2025 WiteTec. Todos direitos reservados
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-left cursor-pointer decoration-white/40 hover:decoration-white hover:opacity-100 opacity-90"
                        >
                            Política de privacidade
                        </Link>
                        <Link
                            href="/terms"
                            className="text-left decoration-white/40 cursor-pointer hover:decoration-white hover:opacity-100 opacity-90"
                        >
                            Termos de uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}