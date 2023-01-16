import React, { FC } from 'react';
import Image from 'next/image';

import { useGetIsMobile } from '../hooks/useGetIsMobile';
import Carousel from './Carousel';
import photo from '../../public/assets/photo.jpg';
import { Project } from './SinglePost';

export interface ProjectContainerProps {
  projects: Project[]
}

const ProjectContainer: FC<ProjectContainerProps> = ({ projects }): JSX.Element => {
  const { isMobile } = useGetIsMobile();

  return (
    <div className="relative min-h-[calc(200px)] h-[calc(100vh-100px)] flex flex-col justify-center items-center py-20">
      <Carousel projects={projects} />
      <div className="flex flex-col z-10 text-start lg:mt-20 lg:mr-6 gap-4 lg:gap-0">
        <h2 className={'text-mid-gray text-xl lg:text-7xl tracking-[0.4em] lg:tracking-[0.8em] font-semibold'}
          dangerouslySetInnerHTML={{ __html: `USE${!isMobile ? '&nbsp&nbsp' : ''}R` }} />
        <h2 className={'text-dark-gray text-xl lg:text-4xl tracking-[0.4em] lg:tracking-[0.8em] ml-7 font-semibold'}
          dangerouslySetInnerHTML={{ __html: `EXPER${!isMobile ? '&nbsp; &nbsp &nbsp' : ''}IENCE` }} />
        <h2 className={`text-dark-gray lg:text-white tracking-[0.4em] lg:tracking-[0.8em] ml-20 lg:ml-12'} 
                font-semibold ${isMobile ? '' : 'outline-title'} text-xl lg:text-7xl`}>DESIGNER</h2>
      </div>
      <div className={`absolute
      'top-0 right-2/4 translate-x-1/2 lg:translate-x-6 translate-y-2/3 lg:translate-y-3/4 w-28 h-60 lg:w-44 lg:h-72 transform`}>
        <Image src={photo} alt="hero" width={300} height={200} />
      </div>
    </div>
  );
};

export default ProjectContainer;
