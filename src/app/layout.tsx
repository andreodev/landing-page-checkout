import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Wite Checkout - Venda mais. Perca menos. Escale com inteligência.",
  description: "Ative agora o Wite Checkout + a IA da Wite Recuperation e veja sua conversão disparar nos primeiros dias. Solução de verdade para sua empresa com checkout otimizado e recuperação inteligente de vendas.",
  keywords: ["checkout", "pagamento", "conversão", "e-commerce", "recuperação de vendas", "inteligência artificial", "gateway de pagamento", "wite checkout"],
  authors: [{ name: "Wite" }],
  openGraph: {
    title: "Wite Checkout - Venda mais. Perca menos. Escale com inteligência.",
    description: "Ative agora o Wite Checkout + a IA da Wite Recuperation e veja sua conversão disparar nos primeiros dias.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wite Checkout - Venda mais. Perca menos. Escale com inteligência.",
    description: "Ative agora o Wite Checkout + a IA da Wite Recuperation e veja sua conversão disparar nos primeiros dias.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-BR">
      <body className={`antialiased bg-[#000000] ${plusJakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
