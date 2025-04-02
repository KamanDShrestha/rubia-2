import Contact from "./components/layout/Contact";
import Benefits from "./components/layout/home/Benefits";
import Hero from "./components/layout/home/Hero";
import InfluencerHelped from "./components/layout/home/InfluencerHelped";
import Pricing from "./components/layout/home/Pricing";
import Review from "./components/layout/home/Review";
import SliderVideo from "./components/layout/home/SliderVideo";
import Solutions from "./components/layout/home/Solutions";

export default function Home() {
  return (
    <>
    <Hero />

    <InfluencerHelped />

    <SliderVideo />

    <Benefits />

    <Review />

    <Solutions />

    <Pricing />

    <div className="my-[12px] lg:my-0">

    <Contact />
    </div>
    </>
  );
}
