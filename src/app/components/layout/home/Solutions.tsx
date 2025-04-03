'use client';

import Image from 'next/image';
import Button from '../../core/Button';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const Solutions = () => {
  const [selected, setSelected] = useState(0);

  const solutionsData = [
    {
      title: 'Social Media Strategy & Optimization',
      description:
        'We create custom strategies for each platform to help your brand grow.',
    },
    {
      title: 'Single Campaign Promotion',
      description:
        'Need to promote a product, event, or special project? We design campaigns for maximum impact.',
    },
    {
      title: 'Brand & Unique Edge Development',
      description: 'Stand out with a strong, unique brand identity.',
    },
  ];

  const images = [
    '/images/solutions/1.png',
    '/images/solutions/2.png',
    '/images/solutions/3.png',
  ];

  return (
    <div className='container lg:pb-[116px]'>
      {/* Header Section */}
      <header className='text-center md:text-left'>
        <h3 className='text-[#004E99] font-bold mb-3'>Solutions</h3>

        <h1 className='text-brand-dark text-4xl mb-3 font-bold'>
          Our solutions
        </h1>

        <p className='text-xl md:w-2/3'>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>

      <div className='mt-16 lg:flex lg:flex-row-reverse'>
        {/* Image Stacking with Animation */}
        <div className='relative lg:w-3/5  h-[528px] lg:ml-[10%] mt-12 lg:mt-0'>
          {images.map((src, index) => {
            const isSelected = index === selected;
            const isBehind = index < selected;
            const rotation = isSelected
              ? 'rotate-0'
              : index === 1
              ? 'rotate-[15deg]'
              : index === 2
              ? 'rotate-[-15deg]'
              : 'rotate-[30deg]';
            const opacity = isSelected ? 'opacity-100' : 'opacity-40';
            const zIndex = isSelected ? 'z-30' : isBehind ? 'z-10' : 'z-20';
            const topOffset = isSelected
              ? 'top-0 left-0'
              : index === 1
              ? 'top-4 left-4'
              : 'top-8 left-8';
            const scale = isSelected ? 'scale-100' : 'scale-95';

            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                style={{
                  backgroundImage: `url('${src}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                className={clsx(
                  'absolute w-[350px] h-[350px] lg:w-[492px] lg:h-[428px] rounded-[20px] transition-all duration-500 ease-in-out cursor-pointer',
                  rotation,
                  opacity,
                  zIndex,
                  topOffset,
                  scale
                )}
              >
                {index === 0 && (
                  <>
                    <img
                      src='/images/solutions/Arrow.png'
                      className='lg:h-28 lg:top-[12rem] lg:left-[10rem] absolute h-20 top-[10rem] left-[7rem]'
                    />
                  </>
                )}
                <img />
              </div>
            );
          })}
        </div>

        {/* Solutions List */}
        <div className='lg:w-2/5'>
          {solutionsData.map((item, index) => (
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={clsx(
                'flex cursor-pointer items-center space-x-4 transition duration-300 border-l-4 border-brand-light p-4',
                selected === index && 'border-brand-saturated'
              )}
            >
              <div>
                <h2 className='text-brand-dark font-bold'>{item.title}</h2>
                <p className='text-sm mt-1 text-gray-600'>{item.description}</p>

                <div className='flex items-center mt-3 space-x-2'>
                  <Link
                    href='/solutions'
                    className='text-brand-saturated font-semibold'
                  >
                    Learn More
                  </Link>

                  <Image
                    src='/icons/arrow-right.svg'
                    alt='Arrow Right'
                    width={11}
                    height={11}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className='mt-12 mb-12 lg:mb-0'>
            <Button link='/solutions'>See All</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
