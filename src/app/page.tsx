import Navbar from "@/components/Navbar";
import Header from "../components/Header";
import Parceiros from "@/components/Parceiros";
import Gateway from "@/components/Gateway";
import Language from "@/components/Countries";
import Integration from "@/components/Integration";
import AppSection from "@/components/AppSection";
import Conversion from "@/components/Conversion";
import TheChoice from "@/components/TheChoice";
import Footer from "@/components/Footer";
import SellMore from "@/components/SellMore";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <>
    <Navbar />
      <Header />
      <Parceiros />
      <Gateway />
      <Language />
      <Solution />
      <Integration />
      <AppSection />
      <Conversion />
      <TheChoice />
      <SellMore />
      <Footer />
    </>
  );
}
