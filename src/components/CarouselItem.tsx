import React, { FC } from 'react';

import NavLink from './NavLink';

export interface CarouselItemProps {
    name: string;
    image: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ name, image }) => {

  return (
    <div className="px-8 lg:px-20">
      {/* <Image
        width={400}
        height={280}
        placeholder="empty"
        priority={true}
        className="object-contain w-[320px] h-[200px] lg:w-[400] lg:h-[280px]"
        src={`/assets/projects/${image}.png`}
        alt={name}
      /> */}
      <div className="flex flex-col items-end gap-4">
        <h3 className="text-red px-6">{name}</h3>
        <NavLink path={`/projects/${name}`} name="View Project" />
      </div>
    </div>
  );
};

export default CarouselItem;
