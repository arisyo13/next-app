import React, { FC } from 'react';
import Image from 'next/image';

import NavLink from './NavLink';
import { Project } from './SinglePost';

const CarouselItem: FC<Project> = ({ name, image, slug }) => {

  return (
    <div className="px-8 lg:px-20">
      <Image
        width={400}
        height={280}
        priority={true}
        className="object-contain w-[320px] h-[200px] lg:w-[400] lg:h-[280px]"
        src={image}
        alt={name}
      />
      <div className="flex flex-col items-end gap-4">
        <h3 className="text-red px-6">{name}</h3>
        <NavLink path={`/projects/${slug}`} name="View Project" />
      </div>
    </div>
  );
};

export default CarouselItem;
