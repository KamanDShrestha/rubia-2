import Image from "next/image";
import Button from "../components/core/Button";
import PricingPoint from "../components/layout/home/pricing/PricingPoint";

const SolutionsPage = () => {
  return (
    <>
      {/* Top Section */}
      <div className="py-12 lg:py-[96px] bg-brand-light">
        <div className="container flex flex-col justify-center items-center">
          <h3 className="text-brand-saturated font-semibold">Solutions</h3>

          <h1 className="text-4xl text-center font-semibold text-brand-dark">
            Social media growth solutions{" "}
          </h1>

          <p className="mt-5 text-center text-xl">
            Tailored strategies, viral campaigns, and full-scale management to
            grow your brand effortlessly.{" "}
          </p>
        </div>
      </div>

      {/* Solutions */}
      <div className="max-w-[1440px] mx-auto">
        <div className="md:py-[64px]">
          <div className="md:flex items-center justify-between">
            <div className="pl-4 lg:pl-[128px] flex flex-col justify-start items-start text-left">
              <div className="w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Social Media Strategy & Optimization{" "}
              </h1>

              <p className="mt-4 text-lg">
                We’ll help you create a complete strategy. Every bit, every detail, chose your platforms and watch yourself become a professional in weeks.
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Brand Assessment: </span>Identify and create things that make you unique.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Work With The Platform: </span>{" "}
                  Learn how to use the algorithm to your advantage.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Maximizing Conversion: </span> Funnel your audience into channels that generate income.
                </PricingPoint>
              </div>
            </div>

            {/* <div>
              <Image
                alt="Solution"
                className="mt-8 md:mt-0 pr-4 md:pr-0 pl-4 md:pl-0"
                src={"/images/solutions/1.png"}
                width={720}
                height={560}
              />
            </div> */}

            <div className="relative w-full max-w-[720px] h-[300px] sm:h-[300px] md:h-[400px] lg:h-[560px] mx-auto">
              {/* Layer 1: Instagram Screenshot (Phone) */}
              <div className="absolute top-[13%] sm:top-[5%] md:top-[15%] lg:top-[5%] right-0 sm:right-4 md:right-8 lg:right-10 w-[33%] sm:w-[35%] md:w-[35%] lg:w-[38%] z-10">
                <Image
                  src="/images/solutions/1/Insta screenshot.png"
                  alt="Instagram Screenshot"
                  width={320}
                  height={640}
                  className="sm:h-[300px] md:h-[300px] lg:h-[520px]"
                />
              </div>

              {/* Layer 2: Front Card (Instagram post) */}
              <div className="absolute bottom-[22%] sm:bottom-[28%] md:bottom-[37%] lg:bottom-[33%] left-12 sm:left-4 md:left-[5%] lg:left-[6.5%] w-[27.78%] sm:w-[25%] md:w-[24%] lg:w-[22%] z-20">
                <Image
                  src="/images/solutions/1/Front card.png"
                  alt="Front Card"
                  width={180}
                  height={180}
                />
              </div>

              {/* Layer 3: Girl Pointing */}
              <div className="absolute bottom-0 sm:bottom-4 md:top-[17%] lg:top-[10%] left-1/2 -translate-x-1/2 sm:left-[40%] md:left-[38%] lg:left-[38%] w-[50%] sm:w-[48%] md:w-[45%] lg:w-[50%] z-10">
                <Image
                  src="/images/solutions/1/Girl pointing.png"
                  alt="Girl Pointing"
                  width={400}
                  height={650}
                  className="sm:h-[280px] md:h-[300px] lg:h-[500px]"
                />
              </div>
            </div>


          </div>
        </div>



        <div className="md:py-[64px]">
          <div className="md:flex items-center justify-between flex-row-reverse">
            {/* Text Section */}
            <div className="pl-4 md:pl-[96px] flex flex-col justify-start items-start text-left">
              <div className="w-12 h-12 mt-9 rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Single Campaign Promotion
              </h1>

              <p className="mt-4 text-lg">
                Need to promote a project, product or something else? This is the one for you.
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Explore Possibilities:</span> Evaluate all possible ways to promote your project.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Step By Step Plan: </span>{" "}
                  Create an effective plan that maximizes ROI.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Execution: </span>  Execute each step perfectly with our help, creating a snowball effect.

                </PricingPoint>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-5 relative flex flex-col items-center lg:items-start">
              <div className="absolute -bottom-8 -left-5 z-10 md:-bottom-10 md:-left-10 lg:bottom-[-30px] lg:left-[-20px] sm:bottom-[-10px] sm:left-[-10px]">
                <Image
                  src="/images/solutions/2/Group 1.png"
                  alt="Animated character with barbell"
                  width={300}
                  height={350}
                  className="w-[200px] h-auto sm:w-[250px] md:w-[60%] lg:w-[300px] xl:w-[350px]"
                />
              </div>

              {/* iPad container */}
              <div className="relative left-4 md:left-6 lg:left-[30px] sm:left-[20px]">
                <Image
                  src="/images/solutions/2/ipad.png"
                  alt="iPad device"
                  width={600}
                  height={450}
                  className="w-auto h-auto sm:w-[400px] md:w-[100%] lg:w-[800px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-[64px]">
          <div className="md:flex items-center justify-between">
            <div className="pl-4 lg:pl-[128px] flex flex-col justify-start items-start text-left">
              <div className="w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Brand & Unique Edge Development{" "}
              </h1>

              <p className="mt-4 text-lg">
                Start getting some actual results, by maximizing your advantages over the competition.
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Explore Niches: </span> Analyze and explore different possible niches for your persona.

                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Upgrade Your Personality: </span>{" "}
                  Recreate your personality to stand out.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Analyze Your Target Audience:</span> Get to know your audience, and feed them the right content.

                </PricingPoint>
              </div>
            </div>

            {/* <div>
              <Image
                alt="Solution"
                className="mt-8 md:mt-0 pr-4 md:pr-0 pl-4 md:pl-0"
                src={"/images/solutions/3.png"}
                width={720}
                height={560}
              />
            </div> */}
            <div className="relative flex justify-center items-center w-full py-8">
              {/* Main container with the YouTube image */}
              <div className="relative w-[100%] max-w-[800px] z-0">
                <Image
                  src="/images/solutions/3/Youtube.png"
                  alt="YouTube interface"
                  width={800}
                  height={394}
                  className="object-contain w-full"
                />
              </div>

              {/* Woman Image - positioned to the left */}
              <div className="absolute left-0 bottom-5 z-10 transform translate-x-[-15%] sm:translate-x-[-15%] md:translate-x-[-25%] lg:translate-x-[-0%] md:bottom-8 lg:bottom-0">
                <Image
                  src="/images/solutions/3/Woman.png"
                  alt="Woman with tablet"
                  width={250}
                  height={350}
                  className="object-contain w-[133px] h-[210px] sm:w-[130px] sm:h-[220px] md:w-[180px] md:h-[190px] lg:w-[250px] lg:h-[420px]"
                />
              </div>

              {/* Man Image - positioned to the right */}
              <div className="absolute -right-6 sm:right-0 bottom-6 sm:bottom-0 z-10 transform translate-x-[5%] sm:translate-x-[15%] md:translate-x-[20%] lg:translate-x-[15%] lg:bottom-[-65px]">
                <Image
                  src="/images/solutions/3/Man.png"
                  alt="Man in sports attire"
                  width={240}
                  height={580}
                  className="object-contain w-[160px] h-[190px] sm:w-[150px] sm:h-[220px] md:w-[150px] md:h-[250px] lg:w-[330px] lg:h-[540px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-[64px]">
          <div className="md:flex items-center justify-between flex-row-reverse">
            {/* Text Section */}
            <div className="pl-4 md:pl-[96px] flex flex-col justify-start items-start text-left px-2">
              <div className="w-12 h-12 mt-9 rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Direct Messaging & Community Management{" "}
              </h1>

              <p className="mt-4 text-lg">
                We help you build real relationships with your audience:
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">24/7 Engagement: </span> We’ll help you respond to messages and comments quickly.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Loyal Fanbase Growth: </span> Turn
                  casual followers into dedicated fans.{" "}
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Community Building: </span>  Keep your audience engaged and create a loyal cult.
                </PricingPoint>
              </div>
            </div>

            <div className="relative w-full max-w-[720px] h-[400px] sm:h-[560px] flex items-center">
              {/* Background Image */}
              <Image
                src="/images/solutions/4/Curves 1.png"
                alt="Background"
                className="absolute top-0 md:top-32 right-[10%] md:right-[160px] z-0 w-[240px] md:w-[320px] max-w-full h-auto"
                width={320}
                height={300}
              />

              {/* Woman Image */}
              <div className="absolute bottom-12 md:bottom-[-32px] left-1/2 md:left-[238px] -translate-x-1/2 md:translate-x-0 z-20 w-[180px] md:w-[260px]">
                <Image
                  src="/images/solutions/4/Woman.png"
                  alt="Woman"
                  width={260}
                  height={340}
                  className="object-contain max-w-full h-auto w-full"
                />
              </div>

              {/* iPhone Image */}
              <div className="absolute top-[20px] md:top-[60px] right-[5%] md:right-[60px] z-10 w-[140px] md:w-[250px]">
                <Image
                  src="/images/solutions/4/iphone.png"
                  alt="iPhone"
                  width={250}
                  height={500}
                  className="object-contain h-auto w-full max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cta Section */}
      <div className="py-[96px] w-full mt-12 md:mt-0 bg-brand-light">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center font-semibold text-brand-dark">
            Start earning real money
            {" "}
          </h1>

          <div className="mt-8">
            <Button link="/contact">Contact Us Today</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
