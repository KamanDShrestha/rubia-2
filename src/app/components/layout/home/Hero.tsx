import Button from "../../core/Button";

const Hero = () => {
  return (
    <div className="md:h-[calc(100vh-108px)] flex justify-center flex-col items-center">
      <div className="container md:flex justify-between items-center">
        <header className="text-center md:text-left">
          <h1 className="text-6xl text-brand-dark leading-[64px] lg:leading-[72px]">
            Turn Your <span className="font-bold italic">Passion</span>{" "}
            <br></br> Into Influence - <br></br>
            <span className="font-bold italic"> And Income</span>
          </h1>

          <p className="max-w-[480px] mt-6 text-xl">
            We help aspiring influencers find their niche, grow their audience,
            and monetize their brand—without the guesswork.
          </p>

          <div className="mt-12">
            <Button link="/contact">Apply Now</Button>
          </div>
        </header>

        <div className="hidden lg:block relative w-[400px] h-full group">
          {/* Before Image as Background */}
          <div
            className="absolute top-[100px] right-[177px] w-[333px] h-[309px] shadow-[0px_8px_64px_-12px_#10182824] 
            rounded-xl bg-cover 
            bg-center 
            transition-transform duration-300 ease-out 
            group-hover:scale-[0.75] group-hover:translate-x-[-60px] group-hover:translate-y-[60px]"
            style={{ backgroundImage: "url('/images/hero/before.png')" }}
          ></div>

          {/* After Image as Background */}
          <div
            className="w-[242px] h-[215px] shadow-[0px_8px_64px_-12px_#10182824] rounded-xl bg-cover bg-center absolute top-[20px] right-[20px] 
            transition-transform duration-300 ease-out 
            group-hover:scale-[1.75] group-hover:translate-x-[-100px]"
            style={{ backgroundImage: "url('/images/hero/after.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
