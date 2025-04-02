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
            <div className="pl-4 md:pl-[128px] flex flex-col justify-start items-start text-left">
              <div className="w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Social Media Strategy & Optimization{" "}
              </h1>

              <p className="mt-4 text-lg">
                We create custom strategies.
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Brand Assessment: </span> Identify
                  what makes you different.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Finding Your Edge: </span>{" "}
                  Highlight what sets you apart in your industry.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Maximizing Impact: </span> Turn
                  small audiences into large, loyal communities.
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

            <div className="relative w-full max-w-[720px] h-[400px] md:h-[560px] mx-auto">
              {/* Layer 1: Instagram Screenshot (Phone) - positioned on the right */}
              <div className="absolute top-[25%] md:top-[0px] right-[0%] md:right-[40px] w-[125px] md:w-[320px] z-10">
                <Image
                  src="/images/solutions/1/Insta screenshot.png"
                  alt="Instagram Screenshot"
                  width={320}
                  height={640}
                  className="object-contain max-w-full h-auto md:h-[550px]"
                />
              </div>

              {/* Layer 2: Front Card (Instagram post) - positioned on the left bottom */}
              <div className="absolute bottom-[25%] md:bottom-[160px] left-[12%] md:left-[16px] w-[100px] md:w-[180px] z-20">
                <Image
                  src="/images/solutions/1/Front card.png"
                  alt="Front Card"
                  width={180}
                  height={180}
                  className="object-contain max-w-full h-auto"
                />
              </div>

              {/* Layer 3: Girl Pointing - positioned in the center */}
              <div className="absolute bottom-10 md:bottom-[-70px] left-1/2 -translate-x-1/2 md:left-[280px] w-[180px] md:w-[360px] z-10">
                <Image
                  src="/images/solutions/1/Girl pointing.png"
                  alt="Girl Pointing"
                  width={400}
                  height={650}
                  className="object-contain max-w-full h-auto md:h-[650px]"
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
                We help you build real relationships with your audience:
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Brand Assessment: </span> Identify
                  what makes you different.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Finding Your Edge: </span>{" "}
                  Highlight what sets you apart in your industry.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Maximizing Impact: </span> Turn
                  small audiences into large, loyal communities.
                </PricingPoint>
              </div>
            </div>

            {/* Image Section */}
            <div className="mt-5 relative flex flex-col items-center lg:items-start">
              <div className="absolute -bottom-8 -left-5 z-10 md:-bottom-10 md:-left-10 lg:bottom-[-30px] lg:left-[-20px]">
                <Image
                  src="/images/solutions/2/Group 1.png"
                  alt="Animated character with barbell"
                  width={300}
                  height={350}
                  className="w-[200px] h-auto md:w-[300px] lg:w-[400px]"
                />
              </div>

              {/* iPad container */}
              <div className="relative left-4 md:left-8 lg:left-[30px]">
                <Image
                  src="/images/solutions/2/ipad.png"
                  alt="iPad device"
                  width={600}
                  height={450}
                  className="w-auto h-auto sm:w-[400px] md:w-[600px] lg:w-[800px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-[64px]">
          <div className="md:flex items-center justify-between">
            <div className="pl-4 md:pl-[128px] flex flex-col justify-start items-start text-left">
              <div className="w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-3xl mt-5 text-brand-dark font-semibold">
                Brand & Unique Edge Development{" "}
              </h1>

              <p className="mt-4 text-lg">
                Stand out with a strong, unique brand identity
              </p>

              <div className="pl-4 text-lg flex flex-col space-y-5 pt-8">
                <PricingPoint>
                  <span className="font-bold">Brand Assessment: </span> Identify
                  what makes you different.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Finding Your Edge: </span>{" "}
                  Highlight what sets you apart in your industry.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Maximizing Impact: </span> Turn
                  small audiences into large, loyal communities.
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
            <div className="mt-5 relative flex flex-col items-center lg:items-start">
              <div className="absolute left-0 bottom-0 md:bottom-[-30px] z-10 md:left-[-70px]">
                <Image
                  src="/images/solutions/3/Woman.png"
                  alt="Woman with tablet"
                  width={200}
                  height={200}
                  className="w-[100px] h-[200px] md:w-[230px] md:h-[420px]"
                />
              </div>
              <div className="absolute right-[-18px] md:right-0 bottom-0 z-10">
                <Image
                  src="/images/solutions/3/Man.png"
                  alt="Man in sports attire"
                  width={200}
                  height={200}
                  className="w-[160px] h-[200px] md:w-[280px] md:h-[400px]"
                />
              </div>
              <div className="relative md:right-12">
                <Image
                  src="/images/solutions/3/Youtube.png"
                  alt="YouTube interface"
                  width={600}
                  height={450}
                  className="w-auto h-auto sm:w-[400px] md:w-[600px] lg:w-[800px]"
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
                  <span className="font-bold">24/7 Engagement: </span> Respond
                  to messages and comments quickly.
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Loyal Fanbase Growth: </span> Turn
                  casual followers into dedicated fans.{" "}
                </PricingPoint>

                <PricingPoint>
                  <span className="font-bold">Community Building: </span> Keep
                  your audience engaged and interactive.
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
            Take your brand to the next level{" "}
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
