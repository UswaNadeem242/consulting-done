
import Image from "next/image";
import HeroSection from "./home/component/herosection";
import WorkSection from "./home/component/work";
import CountriesOffer from "./home/component/countriesoffer";
import ServicesOffered from "./home/component/servicesoffered";
import Leadership from "./home/component/Leadership";
import CTASection from "../src/components/cta";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <CountriesOffer />
      <ServicesOffered />
      <Leadership />
      <CTASection />
    </div>
  );
}
