import Image from "next/image";
import PricingPoint from "../components/layout/home/pricing/PricingPoint";
import Button from "../components/core/Button";

const PricingPage = () => {
  return (
    <div>
      {/* Upper pricing */}
      <div
        style={{
          backgroundImage: "url('/images/bg-pattern.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container py-4 lg:py-[96px]">
          <header className="flex text-center flex-col justify-center items-center">
            <h3 className="text-brand-saturated font-semibold">
              Pricing Plans
            </h3>

            <h1 className="text-5xl mt-3 font-semibold text-brand-dark">
              Invest in Your Influence
            </h1>

            <p className="mt-6 text-xl">
              We offer flexible pricing models designed to grow with you.
            </p>
          </header>

          <div className="mt-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white flex flex-col justify-between border border-[#e1e1e1] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)]  rounded-2xl">
                <div>
                  <div className="w-12 mt-9 h-12 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                    <Image
                      src="/icons/manage.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>

                  <h1 className="text-2xl mt-4 text-brand-dark text-center font-semibold">
                    Full-service management
                  </h1>

                  <div className="mt-8 mb-10 p-9 flex flex-col space-y-4">
                    <PricingPoint>
                      Content strategy, posting & engagement
                    </PricingPoint>

                    <PricingPoint>
                      Brand deals & monetization setup{" "}
                    </PricingPoint>

                    <PricingPoint>
                      Community management & DM handling
                    </PricingPoint>
                    <PricingPoint>
                      30% revenue share after your first $1,000/month (free
                      before that).{" "}
                    </PricingPoint>
                  </div>
                </div>

                <div className="p-8 bg-[#f9f9f9] border-t border-[#e1e1e1] rounded-b-2xl">
                  <Button
                    link="/contact"
                    buttonClass="w-full block text-center"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="bg-white flex flex-col justify-between border border-[#e1e1e1] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)]  rounded-2xl">
                <div>
                  <div className="w-12 mt-9 h-12 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                    <Image
                      src="/icons/tell-us.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>

                  <h1 className="text-2xl px-9 mt-4 text-brand-dark text-center font-semibold">
                    Social Media Strategy & Promotion{" "}
                  </h1>

                  <div className="mt-8 flex p-9 flex-col space-y-4">
                    <PricingPoint>
                      Custom content & growth strategy – Starting at $500{" "}
                    </PricingPoint>

                    <PricingPoint>
                      Single campaign promotion – 15% revenue share or $1,000+
                      (varies by niche & goals){" "}
                    </PricingPoint>
                  </div>
                </div>

                <div className="p-8 bg-[#f9f9f9] border-t border-[#e1e1e1] rounded-b-2xl">
                  <Button
                    link="/contact"
                    buttonClass="w-full block text-center"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="bg-white flex flex-col justify-between border border-[#e1e1e1] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] rounded-2xl">
                <div>
                  <div className="w-12 h-12 mt-9 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                    <Image
                      src="/icons/manage.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>

                  <h1 className="text-2xl px-9 mt-4 text-brand-dark text-center font-semibold">
                    Fanbase & Community Management{" "}
                  </h1>

                  <div className="mt-8 p-9 flex flex-col space-y-4">
                    <PricingPoint>
                      DM responses, audience interaction & loyalty-building
                    </PricingPoint>

                    <PricingPoint>
                      $350/month or 20% revenue share from monetized sources{" "}
                    </PricingPoint>
                  </div>
                </div>

                <div className="p-8 bg-[#f9f9f9] border-t border-[#e1e1e1] rounded-b-2xl">
                  <Button
                    link="/contact"
                    buttonClass="w-full block text-center"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cta Section */}
        <div className="py-[96px] bg-brand-light">
          <div className="container flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center font-semibold text-brand-dark">
              Unsure Which Plan to Choose?
            </h1>

            <p className="mt-5 text-center text-xl">
              Let’s chat! We’ll help you find the best option based on your
              goals.
            </p>

            <div className="mt-8">
              <Button link="/contact">Book a Free Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
