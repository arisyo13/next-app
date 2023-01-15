import React, { FC } from 'react';
import Image from 'next/image';
import { Carousel as Slider } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import CarouselItem, { CarouselItemProps } from './CarouselItem';

const projects: CarouselItemProps[] = [
  { name: 'fire', image: 'fire-project' },
  { name: 'Alarm', image: 'fire-project' },
  { name: 'Alarmz', image: 'fire-project' },
];

interface ArrowProps {
    direction: 'next' | 'previous',
    onClick: () => void
}

const Arrow: FC<ArrowProps> = ({ direction, onClick }) => {
  return <button className={`cursor-pointer absolute z-10 top-1/2 transform ${
    direction === 'next' ? 'right-10' : 'left-10 rotate-180'}`} onClick={onClick}>
    <Image width={14} height={18} src="/assets/arrow.png" alt="carousel-arrow" />
  </button>;
};

const Carousel: FC = () => {

  return (
    <div className="w-full">
      <Slider
        showThumbs={false}
        useKeyboardArrows
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        renderArrowNext={(handler, hasNext) => hasNext && <Arrow direction="next" onClick={handler} />}
        renderArrowPrev={(handler, hasPrev) => hasPrev && <Arrow direction="previous" onClick={handler} />}
      >
        {projects.map((project, index) => <CarouselItem key={index} {...project} />)}
      </Slider>
    </div>
  );
};

export default Carousel;
