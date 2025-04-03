import Image from "next/image";
import Button from "../../core/Button";
const Benefits = () => {
  const featureSteps = [
    {
      icon: "/icons/tell-us.svg",
      title: "Tell Us About You",
      description:
        "Whether you already have a niche in mind or need help finding one, we’ll guide you toward a space where you can thrive.",
    },
    {
      icon: "/icons/strategy.svg",
      title: "We Build Your Strategy",
      description: "You’ll know exactly what to post and when.",
    },
    {
      icon: "/icons/manage.svg",
      title: "We Manage Everything",
      description:
        "From posting your content to engaging with followers and optimizing for monetization, we handle all the behind-the-scenes work so you can focus on creating.",
    },
    {
      icon: "/icons/wallet.svg",
      title: "You Get Paid",
      description:
        "We connect you with brand deals, ad revenue opportunities, and sponsorships, ensuring you turn your influence into a steady income stream.",
    },
  ];

  return (
    <div className="bg-brand-light py-[48px] lg:py-[96px]">
      <div className="container">
        <header className="text-center md:text-left">
          <h3 className="text-[#004E99] font-bold mb-3">Benefits</h3>

          <h1 className="text-brand-dark text-4xl mb-3 font-bold">
            It’s easy to start earning
          </h1>

          <p className="text-xl">
            Just do what you love and make money doing it.
          </p>
        </header>

        <div className="mt-[64px]">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-2/5 space-y-8">
              {featureSteps.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="border border-[#EAECF0] w-14 h-14 flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-lg">
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-[95%]">
                    <h2 className="text-brand-dark font-bold">{item.title}</h2>
                    <p className="text-sm mt-1 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-12 ">
                <Button link="/contact">Apply Now</Button>
              </div>
            </div>

            {/* <div className="rounded-[24px] relative py-[38px] group px-[24px]cmt-12 lg:mt-0 flex justify-center overflow-hidden">
             
              <Image
                className="absolute top-20 right-[132px] group-hover:z-50 opacity-0 group-hover:opacity-100 transform ease-in-out duration-300  translate-y-[160px] group-hover:translate-y-0"
                src={"/images/benefits/ellipse.png"}
                alt=""
                width={200}
                height={200}
              />

              <Image
                src="/images/benefits/analytics.png"
                alt="After Agency"
                width={592}
                height={418}
                className="transition-transform z-10 duration-300 ease-in-out transform scale-100 group-hover:scale-[2] group-hover:translate-y-[15%] group-hover:object-[left_1%]"
              />
            </div> */}
            <div className="relative flex justify-center items-center  max-w-[760px] my-8 lg:my-0">
              {/* Tablet Screen */}
              <Image
                src="/images/benefits/tablet screen.png"
                alt="Tablet Screen"
                width={760}
                height={600}
                className="w-[80%] sm:w-[90%] lg:w-[720px] relative z-10 lg:left-32 lg:bottom-20"
              />

              {/* Social Media Names */}
              <Image
                src="/images/benefits/Socials names.png"
                alt="Social Media Names"
                width={230}
                height={190}
                className="w-20 sm:w-[160px] sm:right-6 sm:left-[-6%] left-[-2%] bottom-[0%]  lg:w-[216px] absolute lg:bottom-16 lg:left-[22px] z-10"
              />

              {/* "ANY SOCIAL MEDIA" Text */}
              <Image
                src="/images/benefits/ANY SOCIAL MEDIA.png"
                alt="ANY SOCIAL MEDIA"
                width={140}
                height={150}
                className="sm:w-20 sm:left-[-30px] absolute w-14 left-[-1.5%] lg:top-[135px] lg:left-[12px] lg:w-[140px] z-0"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
