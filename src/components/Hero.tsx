import React, { FC } from 'react';
import Image from 'next/image';

import { useGetIsMobile } from '../hooks/useGetIsMobile';
import NavLink from './NavLink';
import vercel from '../../public/vercel.svg';
import photo from '../../public/assets/photo.jpg';

const Hero: FC<{ isAboutPage: boolean }> = ({ isAboutPage }): JSX.Element => {
  const { isMobile } = useGetIsMobile();

  return (
    <div className={`relative min-h-[calc(220px)] h-[calc(100vh-120px)] flex ${isAboutPage ?
      'flex-col lg:flex-row md:w-full 2xl:w-9/12 lg:mx-auto' : 'justify-center'} pt-20 items-center`}>
      <div className={`flex flex-col z-10 ${isAboutPage ?
        'text-center items-center absolute inset-auto' : 'text-start lg:mt-20 lg:mr-6'} gap-4 lg:gap-0`}>
        <h2 className={`text-mid-gray text-xl lg:text-7xl ${isAboutPage ?
          'tracking-[0.3em]' : 'tracking-[0.4em] lg:tracking-[0.8em]'} font-semibold`}
        dangerouslySetInnerHTML={{ __html: `USE${!isMobile && !isAboutPage ? '&nbsp&nbsp' : ''}R` }} />
        <h2 className={`text-dark-gray text-xl lg:text-4xl ${isAboutPage ?
          'tracking-[0.3em]' : 'tracking-[0.4em] lg:tracking-[0.8em] ml-7'}  font-semibold`}
        dangerouslySetInnerHTML={{ __html: `EXPER${!isMobile && !isAboutPage ? '&nbsp; &nbsp &nbsp' : ''}IENCE` }} />
        <h2 className={`text-dark-gray lg:text-white ${isAboutPage ?
          'tracking-[0.4em] lg:tracking-[0.3em]' : 'tracking-[0.4em] lg:tracking-[0.8em] ml-20 lg:ml-12'} 
                font-semibold ${isMobile ? '' : 'outline-title'} text-xl lg:text-7xl`}>DESIGNER</h2>
        {!isAboutPage &&
        <p className="hidden lg:block text-mid-gray text-base text-start w-96 self-end lg:mt-4 "
        // eslint-disable-next-line max-len
          dangerouslySetInnerHTML={{ __html: 'From empathyzing to define users need, ideate with many possible solutions and ideas to test and prototype.' }}/>}
        <div className="flex justify-end"><NavLink path="projects" name="Projects" /></div>
      </div>
      {isAboutPage && <div className="w-1/2"></div>}
      <div className={`absolute ${isAboutPage ?
        'top-1/2 left-1/4 translate-x-1/2 translate-y-1/2 md:-translate-y-1/2 lg:translate-x-3/4' :
        'top-1/2 right-2/4 translate-x-1/2 translate-y-1/2 lg:-translate-y-2/4 lg:translate-x-4'} w-28 h-60 lg:w-48 lg:h-96 transform`}>
        <Image width={400} height={300} src={photo} priority alt="hero" />
      </div>

      {isAboutPage && <span className="lg:ml-24 xl:ml-20 flex flex-col">
        <h3 className="text-mid-gray text-2xl font-bold mb-4">Hello!</h3>
        <p className="text-mid-gray text-sm text-start w-96"
          // eslint-disable-next-line max-len
          dangerouslySetInnerHTML={{ __html: 'My name is Sergkio!<br><br>After my graduation of the University of West Attica I got my bachelor of graphics and visual communication design and I did my internship on the printing field of Greek Parliament, after my internship I started working for some printing agencies, I jumped into design process as a freelancer. I was making logos and basic structure of websites. At the same period I was sketching and drawing so I started making tattoos! I worked as a freelancer tattoo artist for two years, after my work I was studying for ux, I was watching videos and I was reading articles, I did some online courses on carrerfoundry, and I completed the seven courses of Google UX Design. The most important thing that attract me on ux was the willing of helping people all around the word for a better experience without frustration.' }}/>
        <h2 onClick={() => console.log('cool event')}
          className="block py-2 hover:bg-dark-gray hover:text-gray cursor-pointer text-dark-gray text-base font-bold">Resume</h2>
      </span>}
    </div>
  );
};

export default Hero;
