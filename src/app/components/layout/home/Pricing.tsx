import Image from "next/image";
import Button from "../../core/Button";
import PricingPoint from "./pricing/PricingPoint";



const Pricing = () => {
  return (
    <div className="py-[48px] lg:py-[96px] bg-brand-light">
      <div className="container">
        <div className="md:flex justify-between">
          <header className="text-center md:text-left">
            <h3 className="text-[#004E99] font-bold mb-3">Pricing</h3>

            <h1 className="text-brand-dark font-semibold text-4xl">
              Simple pricing plans, tailored for you!{" "}
            </h1>

            <p className="mt-5 text-xl">
              All plans are subject to consultation to ensure they best fit your
              goals.
            </p>
          </header>

          <div className="h-fit mt-8 flex justify-center md:justify-end self-end">
            <Button link="/contact">Book a Free Consultation</Button>
          </div>
        </div>

        <div className="mt-[64px]">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] p-9 rounded-2xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-2xl mt-4 text-brand-dark text-center font-semibold">
                Full-service management
              </h1>

              <div className="mt-8 flex flex-col space-y-4">
                <PricingPoint>
                  Content strategy, posting & engagement
                </PricingPoint>

                <PricingPoint>Brand deals & monetization setup </PricingPoint>

                <PricingPoint>Community management & DM handling</PricingPoint>
                <PricingPoint>
                  30% revenue share after your first $1,000/month (free before
                  that).{" "}
                </PricingPoint>
              </div>
            </div>

            <div className="bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] p-9 rounded-2xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                <Image src="/icons/tell-us.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-2xl mt-4 text-brand-dark text-center font-semibold">
                Social Media Strategy & Promotion{" "}
              </h1>

              <div className="mt-8 flex flex-col space-y-4">
                <PricingPoint>
                  Custom content & growth strategy – Starting at $500{" "}
                </PricingPoint>

                <PricingPoint>
                  Single campaign promotion – 15% revenue share or $1,000+
                  (varies by niche & goals){" "}
                </PricingPoint>
              </div>
            </div>

            <div className="bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] p-9 rounded-2xl">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#f3f3f3] flex justify-center items-center">
                <Image src="/icons/manage.svg" alt="" width={20} height={20} />
              </div>

              <h1 className="text-2xl mt-4 text-brand-dark text-center font-semibold">
                Fanbase & Community Management{" "}
              </h1>

              <div className="mt-8 flex flex-col space-y-4">
                <PricingPoint>
                  DM responses, audience interaction & loyalty-building
                </PricingPoint>

                <PricingPoint>
                  $350/month or 20% revenue share from monetized sources{" "}
                </PricingPoint>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
