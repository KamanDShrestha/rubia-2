import Image from 'next/image';
import Button from '../components/core/Button';
import PricingPoint from '../components/layout/home/pricing/PricingPoint';

const SolutionsPage = () => {
  return (
    <>
      {/* Top Section */}
      <div className='py-12 lg:py-[96px] bg-brand-light'>
        <div className='container flex flex-col justify-center items-center'>
          <h3 className='text-brand-saturated font-semibold'>Solutions</h3>

          <h1 className='text-4xl text-center font-semibold text-brand-dark'>
            Social media growth solutions{' '}
          </h1>

          <p className='mt-5 text-center text-xl'>
            Tailored strategies, viral campaigns, and full-scale management to
            grow your brand effortlessly.{' '}
          </p>
        </div>
      </div>

      {/* Solutions */}
      <div className='max-w-[1440px] mx-auto container'>
        <div className='md:py-[64px]'>
          <div className='md:flex items-center justify-between'>
            <div className='pl-4 lg:pl-[128px] flex flex-col justify-start items-start text-left'>
              <div className='w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center'>
                <Image src='/icons/manage.svg' alt='' width={20} height={20} />
              </div>

              <h1 className='text-3xl mt-5 text-brand-dark font-semibold'>
                Social Media Strategy & Optimization{' '}
              </h1>

              <p className='mt-4 text-lg'>
                We’ll help you create a complete strategy. Every bit, every
                detail, chose your platforms and watch yourself become a
                professional in weeks.
              </p>

              <div className='pl-4 text-lg flex flex-col space-y-5 pt-8'>
                <PricingPoint>
                  <span className='font-bold'>Brand Assessment: </span>Identify
                  and create things that make you unique.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Work With The Platform: </span>{' '}
                  Learn how to use the algorithm to your advantage.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Maximizing Conversion: </span>{' '}
                  Funnel your audience into channels that generate income.
                </PricingPoint>
              </div>
            </div>

            <div className="relative w-full max-w-[720px] mx-auto lg:h-[560px] flex items-center justify-center">
              <div className="relative w-full h-0 pb-[100%] sm:pb-[85%] lg:pb-[50%]">
                {/* Layer 1: Instagram Screenshot (Phone) */}
                <div className="absolute top-[10%] right-[0%] w-[40%] sm:w-[32%] md:w-[40%] z-10 lg:w-[38%] lg:top-[0%]">
                  <Image
                    src='/images/solutions/1/Insta screenshot.png'
                    alt='Instagram Screenshot'
                    width={320}
                    height={640}
                    className="w-full h-auto lg:h-[95%]"
                  />
                </div>

                {/* Layer 2: Front Card (Instagram post) */}
                <div className="absolute bottom-[36%] left-[5%] w-[25%] sm:w-[20%] md:w-[25%] z-20 md:bottom-[30%] lg:w-[22%] lg:bottom-[-2%] lg:left-[12%]">
                  <Image
                    src='/images/solutions/1/Front card.png'
                    alt='Front Card'
                    width={180}
                    height={180}
                    className="w-full h-auto lg:h-[80%]"
                  />
                </div>

                {/* Layer 3: Girl Pointing */}
                <div className="absolute top-[15%] left-[10%] w-[60%] sm:w-[50%] md:w-[60%] lg:w-[55%] z-10 lg:left-[18%]">
                  <Image
                    src='/images/solutions/1/Girl pointing.png'
                    alt='Girl Pointing'
                    width={400}
                    height={650}
                    className="w-full h-auto lg:h-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:py-[64px]'>
          <div className='md:flex items-center justify-between flex-row-reverse'>
            {/* Text Section */}
            <div className='pl-4 md:pl-[96px] flex flex-col justify-start items-start text-left'>
              <div className='w-12 h-12 mt-9 rounded-full bg-brand-light flex justify-center items-center'>
                <Image src='/icons/manage.svg' alt='' width={20} height={20} />
              </div>

              <h1 className='text-3xl mt-5 text-brand-dark font-semibold'>
                Single Campaign Promotion
              </h1>

              <p className='mt-4 text-lg'>
                Need to promote a project, product or something else? This is
                the one for you.
              </p>

              <div className='pl-4 text-lg flex flex-col space-y-5 pt-8'>
                <PricingPoint>
                  <span className='font-bold'>Explore Possibilities:</span>{' '}
                  Evaluate all possible ways to promote your project.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Step By Step Plan: </span> Create
                  an effective plan that maximizes ROI.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Execution: </span> Execute each
                  step perfectly with our help, creating a snowball effect.
                </PricingPoint>
              </div>
            </div>

            {/* Image Section */}
            <div className='mt-5 relative flex flex-col items-center'>
              <div className='relative left-4'>
                <div className='absolute -bottom-8 -left-5 z-10 w-[54%]'>
                  <Image
                    src='/images/solutions/2/Group 1.png'
                    alt='Animated character with barbell'
                    width={300}
                    height={350}
                    className='w-full h-auto lg:h-[80%]'
                  />
                </div>

                {/* iPad container */}
                <Image
                  src='/images/solutions/2/ipad.png'
                  alt='iPad device'
                  width={600}
                  height={450}
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='md:py-[64px]'>
          <div className='md:flex items-center justify-between'>
            <div className='pl-4 md:pl-[96px] flex flex-col justify-start items-start text-left'>
              <div className='w-12 h-12 mt-9  rounded-full bg-brand-light flex justify-center items-center'>
                <Image src='/icons/manage.svg' alt='' width={20} height={20} />
              </div>

              <h1 className='text-3xl mt-5 text-brand-dark font-semibold'>
                Brand & Unique Edge Development{' '}
              </h1>

              <p className='mt-4 text-lg'>
                Start getting some actual results, by maximizing your advantages
                over the competition.
              </p>

              <div className='pl-4 text-lg flex flex-col space-y-5 pt-8'>
                <PricingPoint>
                  <span className='font-bold'>Explore Niches: </span> Analyze
                  and explore different possible niches for your persona.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Upgrade Your Personality: </span>{' '}
                  Recreate your personality to stand out.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>
                    Analyze Your Target Audience:
                  </span>{' '}
                  Get to know your audience, and feed them the right content.
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
            <div className='relative flex justify-center items-center w-full py-8 max-w-[720px] '>
              {/* Main container with the YouTube image */}
              <div className='relative w-full z-0'>
                <Image
                  src='/images/solutions/3/Youtube.png'
                  alt='YouTube interface'
                  width={800}
                  height={394}
                  className='object-contain w-full'
                />
                {/* Woman Image - positioned to the left */}
                <div className='absolute left-0 bottom-0 z-10 w-[24%] '>
                  <Image
                    src='/images/solutions/3/Woman.png'
                    alt='Woman with tablet'
                    width={250}
                    height={350}
                    className='object-contain w-full h-auto  lg:h-[70%] md:h-[32%] '
                  />
                </div>

                {/* Man Image - positioned to the right */}
                <div className="absolute md:-right-10 -right-4 z-10 bottom-0 w-[40%]">
                  <Image
                    src='/images/solutions/3/Man.png'
                    alt='Man in sports attire'
                    width={240}
                    height={580}
                    className='object-contain w-full h-auto lg:h-[95%]  md:h-[40%]'
                  />
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className='md:py-[64px]'>
          <div className='flex flex-col items-center justify-between md:flex-row-reverse gap-5'>
            {/* Text Section */}
            <div className=' flex flex-col justify-start items-start text-left px-2'>
              <div className='w-12 h-12 mt-9 rounded-full bg-brand-light flex justify-center items-center'>
                <Image src='/icons/manage.svg' alt='' width={20} height={20} />
              </div>

              <h1 className='text-3xl mt-5 text-brand-dark font-semibold'>
                Direct Messaging & Community Management{' '}
              </h1>

              <p className='mt-4 text-lg'>
                We help you build real relationships with your audience:
              </p>

              <div className='pl-4 text-lg flex flex-col space-y-5 pt-8'>
                <PricingPoint>
                  <span className='font-bold'>24/7 Engagement: </span> We’ll
                  help you respond to messages and comments quickly.
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Loyal Fanbase Growth: </span> Turn
                  casual followers into dedicated fans.{' '}
                </PricingPoint>

                <PricingPoint>
                  <span className='font-bold'>Community Building: </span> Keep
                  your audience engaged and create a loyal cult.
                </PricingPoint>
              </div>
            </div>

            <div className='relative w-full h-[400px] sm:h-[560px] flex items-center justify-center mt-36 sm:mt-0'>
              {/* Background Image */}
              <div className='relative h-full w-[400px]'>
                <Image
                  src='/images/solutions/4/Curves 1.png'
                  alt='Background'
                  className='absolute lg:w-[280px] bottom-0'
                  width={320}
                  height={300}
                />

                <Image
                  src='/images/solutions/4/iphone.png'
                  alt='iPhone'
                  width={250}
                  height={500}
                  className='absolute lg:w-[250px] bottom-0 right-0'
                />
                <Image
                  src='/images/solutions/4/Woman.png'
                  alt='Woman'
                  width={260}
                  height={340}
                  className='absolute lg:w-[250px] bottom-0'
                />
              </div>

              {/* <Image
                src='/images/solutions/4/Curves 1.png'
                alt='Background'
                className='absolute top-0 md:top-32 right-[10%] md:right-[160px] z-0 w-[240px] md:w-[320px] max-w-full h-auto'
                width={320}
                height={300}
              /> */}

              {/* Woman Image */}
              {/* <div className='absolute bottom-12 md:bottom-[-32px] left-1/2 md:left-[238px] -translate-x-1/2 md:translate-x-0 z-20 w-[180px] md:w-[260px]'>
                <Image
                  src='/images/solutions/4/Woman.png'
                  alt='Woman'
                  width={260}
                  height={340}
                  className='object-contain max-w-full h-auto w-full'
                />
              </div> */}

              {/* iPhone Image */}
              {/* <div className='absolute top-[20px] md:top-[60px] right-[5%] md:right-[60px] z-10 w-[140px] md:w-[250px]'>
                <Image
                  src='/images/solutions/4/iphone.png'
                  alt='iPhone'
                  width={250}
                  height={500}
                  className='object-contain h-auto w-full max-w-full'
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Cta Section */}
      <div className='py-[96px] w-full mt-12 md:mt-0 bg-brand-light'>
        <div className='container flex flex-col justify-center items-center'>
          <h1 className='text-4xl text-center font-semibold text-brand-dark'>
            Start earning real money{' '}
          </h1>

          <div className='mt-8'>
            <Button link='/contact'>Contact Us Today</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
